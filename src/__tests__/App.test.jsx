import App from '../App';
import { render, screen } from '@testing-library/react';
import {describe, test, expect} from 'vitest'


describe('App', () => {
  test('should render the headline',() => {
    render(<App />)
    const headline = screen.getByText(/Welcome to React Unit Testing/i)
    expect(headline).toBeInTheDocument()
  })
})
