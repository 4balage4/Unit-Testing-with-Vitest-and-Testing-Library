import {render, screen} from '@testing-library/react'
import RenderAPI, { getName } from './RenderAPI'
import fetchApi from '../utils/fetchApi'


describe('Render API', () => {

  vi.mock('../utils/fetchApi')

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('Renders the component: the image, and the name', async () => {

    //setting up results
    const response = {
      "message": "https://images.dog.ceo/breeds/clumber/n02101556_4039.jpg",
      "status": "success"
    }

    // resolving the api
    fetchApi.mockResolvedValue(response)
    // rendering the components
    render(<RenderAPI />)
    // testing the ui

      // name of the dog comes from the breeds/<NAME>/img
      // using findByX because it will also wait for the request to complete, but instead of failing and retrying (what the waitFor does) this does not fail until the 1 sec expires.
      const dogName = await screen.findByText('clumber')
      const imgAlt = await screen.findByAltText('clumber')

      expect(dogName).toBeInTheDocument()
      expect(imgAlt).toBeInTheDocument()
  })

  test('displays error message if fetch did not work', () => {

  })

  test('verifies the getName function returns the correct name', () => {
    const data = {
      "message": "https://images.dog.ceo/breeds/clumber/n02101556_4039.jpg",
      "status": "success"
    }
      const expectedName = 'clumber'

      const extractedName = getName(data)

      expect(expectedName).toBe(extractedName)
  })

  test('if the getName function returns null', () => {
    const data = {
      "message": "https://images.dog.ceo/breeds//n02101556_4039.jpg",
      "status": "success"
    }
      const extractedName = getName(data)

      const noData = getName({})

      expect(extractedName).toBe(null)
      expect(noData).toBe(null)
      expect(getName({ message: "" })).toBe(null);

    })
})
