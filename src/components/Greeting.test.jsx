import {render, screen} from '@testing-library/react'
import Greeting from './Greeting'
import {test, expect, describe} from 'vitest'


describe('Greeting', () => {

  test('initial render with Guest', () => {
    render(<Greeting />)
    const header = screen.getByRole('heading', {name: /welcome guest to check out the Vitest and Testing Library project/i})

    expect(header).toBeInTheDocument()
  })

  test('checks that the prop provided renders correctly', () => {
    render(<Greeting name="Chief Bromden"/>)

    const header = screen.getByRole('heading', {name: /welcome chief bromden to check out the Vitest and Testing Library project/i})

    expect(header).toBeInTheDocument()
  })
})
