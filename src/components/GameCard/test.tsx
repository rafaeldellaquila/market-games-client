import { screen, fireEvent } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Game name',
  developer: 'Game developer',
  img: 'img/red-dead-img.jpg',
  price: 'R$ 250,00'
}
describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <GameCard
        title={props.title}
        developer={props.developer}
        img={props.img}
        price={props.price}
      />
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 250,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render promotional price in label', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$15,00" />)
    const price = screen.getByText('R$ 250,00')

    expect(price).toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite Icon', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
    expect(ribbon).toBeInTheDocument()
  })
})
