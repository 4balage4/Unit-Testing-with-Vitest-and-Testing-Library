import fetchPost from './fetchPost'
import {test, expect, describe, vi} from 'vitest'

vi.mock('./fetchPost')

describe('fetchPost', () => {

  test('mocking the function', async () => {

    // keep the structure of the data from the jsonplaceholder
    const response = {
      id: 1,
      title: 'Mocked post title',
      text: 'Hello from the other sideeee!'}

    fetchPost.mockResolvedValueOnce(response)

    const result = await(fetchPost(1))

    expect(result).toEqual(response)

    expect(fetchPost).toHaveBeenCalledTimes(1)
    expect(fetchPost).toHaveBeenCalledWith(1)
  })
})
