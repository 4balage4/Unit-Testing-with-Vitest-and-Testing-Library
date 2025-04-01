import {render, screen, waitFor} from '@testing-library/react'
import ToBinary from './ToBinary'
import {test, expect, describe, vi} from 'vitest'
import binaryConverter from '../utils/binaryConverter'
import { afterEach, beforeEach } from 'node:test'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  vi.mock('../utils/binaryConverter.js')
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('ToBinary component', () => {
  test('initial render', () => {
    render(<ToBinary/>)

    const heading = screen.getByRole('heading', {name: /ToBinary/i})
    const input = screen.getByTestId('binary-string')

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();


  })

  test('mocks correctly the input to binary', async () => {
    // setup results ('Nirvana')
    const results = '01001110011010010111001001110110011000010110111001100001'

    // run the mock,

    // WHY DOES THIS RETURN suspended data?
    binaryConverter.mockResolvedValueOnce(results)


      //render
    render(<ToBinary/>)

    // const input = screen.getByRole('textbox')

    // await userEvent.type(input, "Nirvana")

    // await waitFor(() => {
    //   const pTag = screen.getByRole('paragraph')
    //   const binary = screen.getByText('01001110011010010111001001110110011000010110111001100001')

    //   expect(pTag).toBeInTheDocument()
    //   expect(binary).toBeInTheDocument()


    // })



  })

  test('displays binary numbers', () => {
      // test the with the AWAIT?
  })
})
