import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import locationicon from './assets/icons/location-icon.svg'
import calendaricon from './assets/icons/calendar-icon.svg'

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Default input',
  },
}

export const Large: Story = {
  args: {
    type: 'text',
    size: 'large',
    placeholder: 'large',
  },
}

export const Medium: Story = {
  args: {
    type: 'text',
    size: 'medium',
    placeholder: 'medium',
  },
}

export const Small: Story = {
  args: {
    type: 'text',
    size: 'small',
    placeholder: 'small',
  },
}

export const Location: Story = {
  args: {
    variant: 'location',
    type: 'text',
    placeholder: 'Enter location',
    icon: locationicon,
    size: 'large',
  },
}

export const Calendar: Story = {
  args: {
    variant: 'calendar',
    type: 'text',
    placeholder: 'Fri, Jun 04',
    icon: calendaricon,
    size: 'medium',
  },
}
