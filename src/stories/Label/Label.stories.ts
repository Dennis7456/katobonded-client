import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '.'

const meta: Meta<typeof Label> = {
  title: 'Components/Labels',
  component: Label,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const CreateYourTrip: Story = {
  args: {
    text: 'Create Your Trip',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '24px',
      // color: 'var(--vader-dark)',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}
export const SelectDestination: Story = {
  args: {
    text: 'Select Destination(s)',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '15px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const Departing: Story = {
  args: {
    text: 'Departing',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '15px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const Returning: Story = {
  args: {
    text: 'Returning',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '15px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const Travellers: Story = {
  args: {
    text: 'Travellers',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '15px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const AddTransport: Story = {
  args: {
    text: 'Add Transport',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '18px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const AddAccommodation: Story = {
  args: {
    text: 'Add Accommodation',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '18px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const AddActivity: Story = {
  args: {
    text: 'Add Activity',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '18px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const IHaveExactDates: Story = {
  args: {
    text: 'I have exact dates',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '18px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '100',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}

export const TopTours: Story = {
  args: {
    text: 'Top Tours',
    style: {
      height: '33px',
      width: 'auto',
      fontSize: '24px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '300',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}
export const HoneyMoonSpecial: Story = {
  args: {
    text: 'Honey Moon Special',
    style: {
      height: 'auto',
      width: 'auto',
      fontSize: '14px',
      color: '#414649',
      fontFamily: 'Nunito Sans, Helvetica',
      fontWeight: '500',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'fixed',
      top: '0',
      left: '0',
    },
  },
}
