import type { Meta, StoryObj } from '@storybook/react'

import { LocationInput } from './LocationInput'

const meta: Meta<typeof LocationInput> = {
  component: LocationInput,
}

export default meta

type Story = StoryObj<typeof LocationInput>

export const Default: Story = {
  args: {},
}
