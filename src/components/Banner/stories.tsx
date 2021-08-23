import { Story, Meta } from '@storybook/react/types-6-0'

import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://nintendoboy.com.br/wp-content/uploads/2018/11/H2x1_NSwitchDS_Crashlands_image1600w.jpg',
    title: 'Crash Lands',
    subtitle: '<p>Play the new <strong>Crash Lands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/crash-lands'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
