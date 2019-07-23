import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Stack, Button } from '../components'
import styled from 'styled-components'

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.maroon.hex()};
`

const SandstoneStack = styled(Stack)`
  background-color: ${({ theme }) => theme.sandstone.hex()};
  border: solid 2px #303030;
`

storiesOf('Stack', module)
  .add('Horizontal, start aligned', () => {
    return (
      <SandstoneStack
        horizontal
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, center aligned', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='center'
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, end aligned', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='end'
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, evenly aligned', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='even'
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, spaced around', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='around'
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, spaced between', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='between'
        renderAs='div'
        spacing={4}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SandstoneStack>
    )
  })
  .add('Horizontal, evenly with buttons', () => {
    return (
      <SandstoneStack
        horizontal
        horizontalAlign='even'
        renderAs='div'
        spacing={4}
      >
        <Button label='SUPER START' onClick={action('click')} />
        <Button label='START' variant='outline' onClick={action('click')} />
        <Button label='CENTER' onClick={action('click')} />
        <Button label='END' variant='outline' onClick={action('click')} />
        <Button label='VERY END' onClick={action('click')} />
      </SandstoneStack>
    )
  })
