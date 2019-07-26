import React from 'react'

export const Text = props => {
  const { children, className } = props
  return <span className={className} >{children}</span>
}
