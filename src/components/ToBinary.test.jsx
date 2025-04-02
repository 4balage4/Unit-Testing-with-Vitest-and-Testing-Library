import {render, screen, waitFor} from '@testing-library/react'
import ToBinary from './ToBinary'
import userEvent from '@testing-library/user-event'



describe('ToBinary component', () => {
  test('initial render', () => {
    render(<ToBinary/>)

    const heading = screen.getByRole('heading', {name: /ToBinary/i})
    const input = screen.getByTestId('binary-string')

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();


  })

  test('correctly converts the input to binary', async () => {
    // testing when a new element appears in the dom
    // using await for this.
    // since the toBinary is not an api or async function we dont need to mock it.

    render(<ToBinary/>)
    // setup results ('Nirvana')


    const input = screen.getByRole('textbox')

    // user event is async, so we need to await
    await userEvent.type(input, "Nirvana")
    const result = '01001110011010010111001001110110011000010110111001100001'

    // the change will appear, the element is not there
    await waitFor(() => {
      // checks that the results are in the document or not
      const pTag = screen.getByText(result)
      expect(pTag).toBeInTheDocument()
    })
  })
})
