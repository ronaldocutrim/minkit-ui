import * as S from './styles';

import * as React from 'react';

import type { TextFieldProps } from './types';

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <S.Input ref={ref} {...props} />;
  }
);

TextField.displayName = 'TextField';
