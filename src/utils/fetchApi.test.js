
import { afterEach } from 'node:test'
import fetchApi from './fetchApi'


// IN this test I am not mocking the API.
// I want to know is it truly returns a data
// this means we are spying on the fetch


  afterEach(() => {
    vi.restoreAllMocks()
  })

describe('fetchAPI function', () => {

  test('fetches a random dog image', async () => {
    // mocking the global fetch function
    const mockResponse = {
      "message": "https://images.dog.ceo/breeds/clumber/n02101556_4039.jpg",
      "status": "success"
    }


    // global or globalThis. globalThis is an universal object, in browser it is equivalent to window
    // in node.js is equivalent to global.
    // i just want to know that my api returning a real data.
    const fetchRequest = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    })

    // calling fetchApi
    const data = await fetchApi()
    // called one time and called with this parameter:
    expect(fetchRequest).toBeCalledTimes(1)
    expect(fetchRequest).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random')

    // check that the data is correct
    expect(data).toEqual(mockResponse)


    // restore the mock, but I can use afterEach instead
    // fetchRequest.mockRestore();
  })
})
