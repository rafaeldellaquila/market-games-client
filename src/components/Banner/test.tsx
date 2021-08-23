import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'
const props = {
  img: 'https://nintendoboy.com.br/wp-content/uploads/2018/11/H2x1_NSwitchDS_Crashlands_image1600w.jpg',
  title: 'Crash Lands',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/crash-lands'
}

describe('<Banner />', () => {
  it('it should render the banner', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByText(/Crash Lands/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Crash lands/i })).toHaveAttribute(
      'src',
      'https://nintendoboy.com.br/wp-content/uploads/2018/11/H2x1_NSwitchDS_Crashlands_image1600w.jpg'
    )

    expect(container.firstChild).toMatchSnapshot
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
