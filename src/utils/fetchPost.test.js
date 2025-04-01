import { afterEach } from 'node:test'
import fetchPost from './fetchPost'
import {test, expect, describe, vi} from 'vitest'


afterEach(() => {
  vi.restoreAllMocks()
})


// IN this test I am not mocking the API.
// I want to know is it truly returns a data
// this means we are spying on the fetch


describe('fetchPost', () => {

  test('fetches a post', async () => {
    //
    const mockResponse = {
      userId: 1,
      id: 1,
      title: 'Mocked post title',
      body: 'Hello from the other sideeee!'}

      const fetchRequest = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
    })

    const data = await fetchPost(1)

    expect(fetchRequest).toBeCalledTimes(1)
    expect(fetchRequest).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1')

    expect(data).toEqual(mockResponse)
  })


})
