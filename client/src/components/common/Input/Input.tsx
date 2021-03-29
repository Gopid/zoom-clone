import React from 'react';
import styled from 'styled-components';
import constants from '../../../constants';

export enum InputSizes {
  small,
  medium,
  large,
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: InputSizes;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

const defaultSize = InputSizes.large;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, size, ...props }, ref) => (
    <>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput id={id} size={size} ref={ref} {...props} />
    </>
  )
);

const StyledLabel = styled.label`
  ${({ theme }) => `
    display: block;
    margin-bottom: ${theme.pxToRem(10)};
    font-size: ${theme.pxToRem(12)};
    color: ${theme.colors.text1};
    font-weight: normal;
  `}
`;

const getHeightByProp = (size: InputSizes = defaultSize) => {
  switch (size) {
    case InputSizes.small:
      return constants.height.small;
    case InputSizes.medium:
      return constants.height.medium;
    default:
      return constants.height.large;
  }
};

const StyledInput = styled.input<InputProps>`
  ${({ theme, size }) => `
    height: ${theme.pxToRem(getHeightByProp(size))};
    width: 100%;
    border: ${theme.pxToRem(2)} solid ${theme.colors.divider};
    border-radius: ${theme.pxToRem(12)};
    margin-bottom: ${theme.pxToRem(16)};
    padding: 0 ${theme.pxToRem(16)};
    font-size: ${theme.pxToRem(15)};

    &:focus {
      outline: 0;
      border: ${theme.pxToRem(2)} solid ${theme.colors.primaryBlue};
    }
  `}
`;

export default Input;
