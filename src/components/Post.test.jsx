import {render, screen, waitFor} from '@testing-library/react'
import Post from './Post'
import {test, expect, describe, vi} from 'vitest'
import userEvent from '@testing-library/user-event'
import fetchPost from '../utils/fetchPost'
import { afterEach, beforeEach } from 'node:test'


describe('Post', () => {

  beforeEach(() => {
    vi.mock('../utils/fetchPost')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('initial render and confirms that no post is fetched', () => {
      render(<Post/>)

      // just test the header is rendered
      const heading = screen.getByRole('heading', {name: /Fetch Post/i})

      expect(heading).toBeInTheDocument()

      // i expect the paragraph with the post-text testid wont be in the document
      const postText = screen.queryByTestId('post-text')

      expect(postText).not.toBeInTheDocument()

      // the form is rendered and the button
      const form = screen.getByRole('form', {name: /post form/i})
      const button = screen.getByRole('button', {name: /fetch post/i})

      expect(form).toBeInTheDocument()
      expect(button).toBeInTheDocument()

  })


  test('the dropdown menu is working, and updates the state correctly', async () => {
    render(<Post/>)
    // testing the dropdown current state is 1. Means "Post 1" is selected
    const select = screen.getByRole('combobox')

    expect(select).toHaveValue('1')

    // select another option
    await userEvent.selectOptions(select, '3')

    expect(select).toHaveValue('3')

  })

  test('mocks the fetch request', async () => {
    // https://jsonplaceholder.typicode.com/posts/1

    // this is the response I except from my api
    // keep the structure of the data from the jsonplaceholder
    const response = {
      userId: 1,
      id: 1,
      title: 'Mocked post title',
      body: 'Hello from the other sideeee!'}

      // running
      fetchPost.mockResolvedValueOnce(response)


      // the render must be after the mocking
      render(<Post/>)

      const button = screen.getByRole('button', {name: /fetch post/i})

      await userEvent.click(button)

      await waitFor(() => {
        const element = screen.getByTestId('post-text')
        const text = screen.getByText(/Hello from the other sideeee!/i)

        expect(element).toBeInTheDocument()
        expect(text).toBeInTheDocument()
      })
      expect(fetchPost).toHaveBeenCalledOnce()
      // value is 1, this is what is being fetched
      expect(fetchPost).toHaveBeenCalledWith("1")
   })


   test('simulates failed request', () => {

   })

   test('prevents default behavior', () => {

  })

})
