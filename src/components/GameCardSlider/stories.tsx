import { Story, Meta } from '@storybook/react/types-6-0'
import items from './mock'

import GameCardSlider from '.'
import { GameCardProps } from 'components/GameCard'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
