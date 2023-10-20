import React from 'react'
import './styles.css'

interface LabelProps {
  text: string
  style: React.CSSProperties
}

export const Label = ({ text, ...props }: LabelProps): JSX.Element => {
  return (
    <div {...props} className="label">
      <div>{text}</div>
    </div>
  )
}
