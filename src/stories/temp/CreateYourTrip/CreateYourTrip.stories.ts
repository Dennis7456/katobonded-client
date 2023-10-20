import type { Meta, StoryObj } from '@storybook/react'

import { CreateYourTrip } from './CreateYourTrip'

const meta: Meta<typeof CreateYourTrip> = {
  component: CreateYourTrip,
}

export default meta

type Story = StoryObj<typeof CreateYourTrip>

export const YourTrip: Story = {}
