import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import PropTypes from 'prop-types'
import { Text } from './Text'
import { defaultTheme } from '../theme/Theme'

const ButtonBase = styled.div`
  width: fit-content;
  padding: 1rem 2rem; 
  border-radius: 2px;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: translate(0px, -3px);
  }
`

const ButtonPrimaryContainer = styled(ButtonBase)`
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const ButtonOutlineContainer = styled(ButtonBase)`
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px;

  &:hover {
    box-shadow: inset 0 -2px 0 0;
    border: 1px solid ${({ borderColor }) => borderColor};
  }
`

const ButtonTransparentOutlineContainer = styled(ButtonOutlineContainer)`
  background-color: transparent;
`

const ButtonVariants = {
  primary: ButtonPrimaryContainer,
  outline: ButtonOutlineContainer,
  transparent: ButtonTransparentOutlineContainer
}

const ButtonLabel = styled(Text)`
  user-select: none;
  color: ${({ textColor }) => textColor};

  ${ButtonBase}:hover {
    color: ${({ hoverTextColor }) => hoverTextColor};
  }
`

const buttonStyles = {
  primary: {
    button: {
      backgroundColor: defaultTheme.maroon,
      hoverColor: Color(defaultTheme.maroon).lighten(0.2).string()
    },
    label: {
      textColor: defaultTheme.white,
      hoverTextColor: defaultTheme.white
    }
  },
  outline: {
    button: {
      backgroundColor: defaultTheme.white,
      borderColor: defaultTheme.maroon
    },
    label: {
      textColor: defaultTheme.maroon,
      hoverTextColor: defaultTheme.maroon
    }
  },
  transparent: {
    button: {
      backgroundColor: defaultTheme.transparent,
      borderColor: defaultTheme.maroon
    },
    label: {
      textColor: defaultTheme.maroon,
      hoverTextColor: defaultTheme.maroon
    }
  }
}

export const Button = props => {
  const { label, variant, onClick, ariaLabel } = props
  const ButtonContainer = ButtonVariants[variant]

  const style = buttonStyles[variant]

  return (
    <ButtonContainer
      role='button'
      aria-label={ariaLabel}
      onClick={onClick}
      {...style.button}
    >
      <ButtonLabel
        variant={variant}
        {...style.label}
      >
        {label}
      </ButtonLabel>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  onClick: () => null,
  variant: 'primary'
}

Button.props = {
  variant: PropTypes.oneOf(['primary', 'outline', 'transparent']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  styles: {
    button: {
      backgroundColor: PropTypes.string,
      hoverColor: PropTypes.string,
      borderColor: PropTypes.string
    },
    label: {
      textColor: PropTypes.string
    }
  }
}
