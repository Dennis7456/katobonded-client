import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const MainFooter: Story = {}
