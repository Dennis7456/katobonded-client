import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'full',
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
