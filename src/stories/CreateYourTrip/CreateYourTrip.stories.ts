import type { Meta, StoryObj } from '@storybook/react'

import CreateYourTrip from './CreateYourTrip'

const meta: Meta<typeof CreateYourTrip> = {
  title: 'Example/CreateYourTrip',
  component: CreateYourTrip,
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
