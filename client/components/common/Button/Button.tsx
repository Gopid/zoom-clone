import React from 'react';
import styled from 'styled-components';
import constants from '../../../constants';

export enum ButtonVariants {
  primaryBlue,
  primaryOrange,
  outline,
  text,
  danger,
}

export enum ButtonSizes {
  large,
  medium,
  small,
}

export interface ButtonProps {
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  fluid?: boolean;
  size?: ButtonSizes;
  disabled?: boolean;
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'button',
  fluid = false,
  size = ButtonSizes.large,
  children,
  variant,
  disabled = false,
  className,
}) => {
  let Component;
  switch (variant) {
    case ButtonVariants.primaryOrange:
      Component = StyledPrimaryOrangeButton;
      break;
    case ButtonVariants.outline:
      Component = StyledOutlineButton;
      break;
    case ButtonVariants.text:
      Component = StyledTextButton;
      break;
    case ButtonVariants.danger:
      Component = StyledDangerButton;
      break;
    default:
      Component = StyledPrimaryBlueButton;
  }

  return (
    <Component type={type} fluid={fluid} size={size} disabled={disabled} className={className}>
      {children}
    </Component>
  );
};

const StyledBaseButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;

  ${({ theme, fluid, size, disabled }) => `
    ${fluid ? 'width: 100%' : ''};
    color: ${theme.colors.offText};
    padding: ${theme.pxToRem(5)} ${theme.pxToRem(16)};
    border-radius: ${theme.pxToRem(8)};
    font-size: ${theme.pxToRem(14)};
    height: ${theme.pxToRem(constants.height.small)};
    padding: 0 ${theme.pxToRem(16)};

    ${
      size === ButtonSizes.medium
        ? `
      border-radius: ${theme.pxToRem(12)};
      font-size: ${theme.pxToRem(16)};
      height: ${theme.pxToRem(constants.height.medium)};
      padding: ${theme.pxToRem(5)} ${theme.pxToRem(16)};
    `
        : ''
    }

    ${
      size === ButtonSizes.large
        ? `
      border-radius: ${theme.pxToRem(14)};
      font-size: ${theme.pxToRem(20)};
      height: ${theme.pxToRem(constants.height.large)};
      padding: ${theme.pxToRem(5)} ${theme.pxToRem(16)};
    `
        : ''
    }

    &:hover {
      background: ${theme.colors.lightOutline};
      color: ${theme.colors.primaryDarkBlue};
    }

    && {
      ${
        disabled
          ? `
      background: ${theme.colors.disabledBackground};
      color: ${theme.colors.disabledText};
      border: none;
      pointer-events: none;
    `
          : ''
      }
    }
  `}
`;

const StyledPrimaryBlueButton = styled(StyledBaseButton)<ButtonProps>`
  ${({ theme }) => `
    background: ${theme.colors.primaryBlue};
    &:hover {
      color: ${theme.colors.offText};
      background: ${theme.colors.primaryLightBlue};
    }
  `}
`;

const StyledPrimaryOrangeButton = styled(StyledBaseButton)<ButtonProps>`
  ${({ theme }) => `
    background: ${theme.colors.primaryOrange};
    &:hover {
      color: ${theme.colors.offText};
      background: ${theme.colors.primaryLightOrange};
    }
  `}
`;

const StyledOutlineButton = styled(StyledBaseButton)<ButtonProps>`
  ${({ theme }) => `
    background: ${theme.colors.outline};
    color: ${theme.colors.text};
  `}
`;

const StyledTextButton = styled(StyledBaseButton)<ButtonProps>`
  ${({ theme }) => `
    background: none;
    color: ${theme.colors.primaryBlue};
    &:hover {
      background: ${theme.colors.lightOutline};
      color: ${theme.colors.primaryDarkBlue};
    }
  `}
`;

const StyledDangerButton = styled(StyledBaseButton)<ButtonProps>`
  ${({ theme }) => `
    background: ${theme.colors.fadedDanger};
    font-weight: bold;
    color: ${theme.colors.body};
    &:hover {
      background: ${theme.colors.danger};
      color: ${theme.colors.body};
    }
  `}
`;

export default Button;
