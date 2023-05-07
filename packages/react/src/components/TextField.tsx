import * as React from 'react';
import styled from 'styled-components';
import { input as InputStyles } from '@minkit/styles';
import { ResponsiveProperty } from '@minkit/styles';

export const Input = styled.input({ ...InputStyles });

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: ResponsiveProperty<'primary' | 'secondary'>;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <Input ref={ref} {...props} />;
  }
);

TextField.displayName = 'TextField';
