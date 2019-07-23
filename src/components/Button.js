import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from './Text'

const ButtonBase = styled.div`
  width: fit-content;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #A0A0A0;
  cursor: pointer;
`

const ButtonPrimaryContainer = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.maroon.hex()};

  &:hover {
    background-color: ${({ theme }) => theme.maroon.lighten(0.3).toString()};
  }
`

const ButtonOutlineContainer = styled(ButtonBase)`
  border: 2px solid ${({ theme }) => theme.maroon.hex()};
  background-color: ${({ theme }) => theme.white.hex()};
  padding: 10px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.maroon.lighten(0.3).toString()};
  }
`

const ButtonLabel = styled(Text)`
  user-select: none;
  color: ${({ theme, variant }) => variant === 'primary' ? theme.white.hex() : theme.maroon.hex()};
`

export const Button = props => {
  const { label, variant, className, onClick, ariaLabel } = props
  const ButtonContainer = variant === 'primary' ? ButtonPrimaryContainer : ButtonOutlineContainer
  console.log('ACTIVE: ',document.activeElement)
  return (
    <ButtonContainer
      role='button'
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      <ButtonLabel variant={variant}>{label}</ButtonLabel>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  onClick: () => null,
  variant: 'primary'
}

Button.props = {
  variant: PropTypes.oneOf(['primary', 'outline']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired
}
