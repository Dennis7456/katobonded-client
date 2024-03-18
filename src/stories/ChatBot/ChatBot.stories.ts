import type { Meta, StoryObj } from '@storybook/react'
import { ChatBot } from './ChatBot'

const meta: Meta<typeof ChatBot> = {
  title: 'Example/Chatbot',
  component: ChatBot,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // args: {
  //   primary: true,
  //   label: 'Button',
  // },
}
