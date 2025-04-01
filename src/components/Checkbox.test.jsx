import {render, screen} from '@testing-library/react';
import Checkbox from './Checkbox'
import {test, expect, describe} from 'vitest'
import userEvent from '@testing-library/user-event'


describe('Checkbox', () => {

  const renderComponent = () => {
    render(<Checkbox/>)

    return {
      heading: screen.getByRole('heading'),
      text: screen.getByRole('paragraph'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button', {name: /next/i}),
    }

  }

  test('check that elements render', () => {
    const {heading, text, checkbox, button} = renderComponent()


    // test woud pass or not pass without these lines too.
    expect(heading).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('box is working', async () => {
    const {checkbox} = renderComponent()

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()

    await userEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
  })

  test('ticking box, enables, disables the button', async () => {
    const {checkbox, button} = renderComponent()

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(button).toBeEnabled()

    await userEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
  })
})
