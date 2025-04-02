import {render, screen} from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event'


describe('Counter', () => {

  test('Counter renders correctly, and starts with 0', () => {
    render(<Counter/>)
    const header = screen.getByText('Counter')
    const countElement = screen.getByText('Count: 0')

    expect(header).toBeInTheDocument()
    expect(countElement).toBeInTheDocument()

  })

  test('increment button works', async () => {
    render(<Counter/>)
    // check the count is 0
    const countElement = screen.getByText('Count: 0')
    expect(countElement).toBeInTheDocument()

    // button grab, and test rendering
    const button = screen.getByRole('button', {name: /increment/i})

    expect(button).toBeInTheDocument()

    // click and test the increment.
    await userEvent.click(button);
    const increment = screen.getByText('Count: 1')
    // const countElement = screen.getByText('Count: 0')
    expect(increment).toBeInTheDocument()

   })

   test('decrement button works', async () => {
    render(<Counter/>)
    // check the count is 0
    const countElement = screen.getByText('Count: 0')
    expect(countElement).toBeInTheDocument()

    // button grab, and test rendering
    const button = screen.getByRole('button', {name: /decrement/i})

    expect(button).toBeInTheDocument()

    // click and test the decrement.
    await userEvent.click(button);
    const decrement = screen.getByText('Count: -1')
    // const countElement = screen.getByText('Count: 0')
    expect(decrement).toBeInTheDocument()

   })
})
