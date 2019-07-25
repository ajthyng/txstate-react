import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, Stack } from '../components'
import { defaultTheme } from '../theme/Theme'
import styled from 'styled-components'

const Container = styled(Stack)`
  background-color: ${defaultTheme.sandstone};
  border: solid 1px;
`

storiesOf('Button', module)
  .add('primary', () => <Button variant='primary' ariaLabel='Primary' label='Primary Button' onClick={action('click')} />)
  .add('outline', () => <Button variant='outline' ariaLabel='Outline' label='Outline Button' onClick={action('click')} />)
  .add('transparent', () => {
    return (
      <Container
        horizontal
        horizontalAlign='center'
        spacing={8}
      >
        <Button variant='transparent' label='Transparent Button' onClick={action('click')} />
      </Container>
    )
  })
