import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading color="white">Text</Heading>)
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Text</Heading>)
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Text</Heading>)
    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line at thhe bottom', () => {
    renderWithTheme(<Heading lineBottom>Text</Heading>)

    expect(screen.getByRole('heading', { name: /text/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })
})