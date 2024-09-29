import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'
import { LoginModalProvider } from 'src/context/LoginModalContext'

// const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <LoginModalProvider>{children}</LoginModalProvider>
// )

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'full',
    // context: { Provider: LoginModalProvider},
  },

  tags: ['autodocs'],

  // Decorator to wrap Header component in LoginModalProvider
  // decorators: [
  //   (Story) => (
  //     <LoginModalProvider>
  //     <Story />
  //     </LoginModalProvider>
  //   ),
  // ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
