/// <reference types="typescript" />
import React from 'react'

export type Variant = 
  | 'primary'
  | 'outline'
  | 'transparent'

export interface ButtonProps {
  variant?: Variant,
  onClick?: function,
  label: string,
  ariaLabel: string,
}

export declare const Button: React.FunctionComponent<ButtonProps>
