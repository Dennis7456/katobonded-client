// /** @jsxImportSource @emotion/react */
import React from 'react'
import './styles.css'

interface InputProps {
  size?: 'small' | 'medium' | 'large'
  variant: 'location' | 'calendar'
  type: string
  placeholder: string
  icon: string
  alt: string
  children: React.ReactNode
}

// type Position = 'fixed' | 'absolute' | 'relative'
export const Input: React.FC<InputProps> = ({
  size,
  variant = 'location',
  type,
  placeholder,
  icon,
  alt,
  children,
}: InputProps) => {
  // const beforeStyles = {
  //   height: 49,
  //   width: 348,
  //   position: 'fixed' as Position,
  // }

  // const iconStyles = {}
  // const variantStyles = {
  //   location: {},
  //   date: {},
  //   dropdown: {},
  // }
  // const inputStyles = {
  //   ...beforeStyles,
  //   ...variantStyles[variant],
  // }
  return (
    // <div style={inputStyles} className="storybook-input-container">
    <div className="storybook-input-container">
      {icon !== null && icon !== '' && (
        <img
          src={icon}
          alt={alt}
          className={['storybook-icon', `storybook-icon--${variant}`].join(' ')}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={[
          'storybook-input',
          `storybook-input--${size}`,
          `storybook-input--${variant}`,
        ].join(' ')}
      ></input>
    </div>
  )
}
