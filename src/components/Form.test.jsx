import {render, screen, waitFor} from '@testing-library/react'
import Form from './Form'
import {test, expect, describe, vi} from 'vitest'
import userEvent from "@testing-library/user-event"



describe('Form', () => {

  // simplyfying.
  const renderComponent = () => {
    render(<Form/>)

    return {
      form: screen.getByRole("form", {name: 'contact-form'}),
      nameInput: screen.getByRole("textbox", {name: /name/i}),
      emailInput: screen.getByRole("textbox", {name: /email/i}),
      companyInput: screen.getByRole("textbox", {name: /company/i}),
      button: screen.getByRole('button', {name: /submit/i}),
    }
  }



  test('initial render - inputs render', () => {
    const {form, nameInput, emailInput, companyInput, button} = renderComponent()

    // this is not neccessary because the test would fail, since the getByRole fails if
    // the element is not found in the document.
    expect(form).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(companyInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('Typing updates the form value', async () => {
    const { nameInput, emailInput, companyInput} = renderComponent()


    await userEvent.type(nameInput, 'Balazs')
    await userEvent.type(emailInput, 'balazs@protonmail.com')
    await userEvent.type(companyInput, 'Your Company')


    expect(nameInput).toHaveValue('Balazs')
    expect(emailInput).toHaveValue('balazs@protonmail.com')
    expect(companyInput).toHaveValue('Your Company')
  })

  test('submit form works', async () => {

    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const { nameInput, emailInput, companyInput, button} = renderComponent()


    await userEvent.type(nameInput, 'Balazs')
    await userEvent.type(emailInput, 'balazs@protonmail.com')
    await userEvent.type(companyInput, 'Your Company')


    expect(nameInput).toHaveValue('Balazs')
    expect(emailInput).toHaveValue('balazs@protonmail.com')
    expect(companyInput).toHaveValue('Your Company')

    await userEvent.click(button)


    expect(alertMock).toHaveBeenCalledWith('Form submitted by Balazs')

    // restores this mock.
    alertMock.mockRestore()

  })

  test('form reset after submission', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const { nameInput, emailInput, companyInput, button} = renderComponent()


    await userEvent.type(nameInput, 'Balazs')
    await userEvent.type(emailInput, 'balazs@protonmail.com')
    await userEvent.type(companyInput, 'Your Company')


    expect(nameInput).toHaveValue('Balazs')
    expect(emailInput).toHaveValue('balazs@protonmail.com')
    expect(companyInput).toHaveValue('Your Company')

    await userEvent.click(button)


    expect(alertMock).toHaveBeenCalledWith('Form submitted by Balazs')

    await waitFor(() => {
      expect(nameInput).toHaveValue('')
      expect(emailInput).toHaveValue('')
      expect(companyInput).toHaveValue('')
    })
    // restores this mock.
    alertMock.mockRestore()


  })



})
