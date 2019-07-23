import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components'

storiesOf('Button', module)
  .add('with primary', () => <Button variant='primary' ariaLabel='Primary' label='Primary Button' onClick={action('click')} />)
  .add('with outline', () => <Button variant='outline' ariaLabel='Outline' label='Outline Button' onClick={action('click')} />)
