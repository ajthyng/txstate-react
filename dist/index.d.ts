/// <reference types="typescript" />
import React from 'react'

enum Variant {
  primary = 'primary',
  outline = 'outline'
}

interface IButtonStyles {
  button: HTMLStyleElement,
  label: HTMLStyleElement
}

interface IButton {
  variant?: Variant,
  onClick?: function,
  label: string,
  ariaLabel: string,
  styles?: IButtonStyles
}

export declare const Button: React.FunctionComponent<IButton>
