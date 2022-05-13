
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';

import { Button, ButtonColor, ButtonProps } from '@Application/src/components/molecules/Button';

const props: ButtonProps = {
  color: ButtonColor.Primary,
  onClick: jest.fn(),
  text: 'Button Text'
};

beforeEach( async () => {
  render(<Button {...props} />)
})

describe('<Button />', () => {
  test('Render component', () => {
    screen.getByText(props.text)
  })

  test('Check fire onClick function', () => {
    fireEvent.click(screen.getByText(props.text))

    expect(props.onClick).toBeCalledTimes(1)
  })
})