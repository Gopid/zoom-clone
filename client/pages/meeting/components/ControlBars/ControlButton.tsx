import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from 'theme';

interface ControlButtonProps {
  isOn: boolean;
  OnIcon: any;
  OffIcon: any;
  onCaption: string;
  offCaption: string;
  onClick: () => void;
}

const ControlButton: FunctionComponent<ControlButtonProps> = ({
  isOn,
  OnIcon,
  OffIcon,
  onCaption,
  offCaption,
  onClick,
}) => (
  <StyledControlButton onClick={onClick}>
    <StyledIcon>{isOn ? <OnIcon /> : <OffIcon />}</StyledIcon>
    <StyledControlButtonCaption>{isOn ? offCaption : onCaption}</StyledControlButtonCaption>
  </StyledControlButton>
);

const StyledControlButtonCaption = styled.span`
  font-size: ${(props) => props.theme.pxToRem(12)};
  color: ${(props) => props.theme.colors.lightGray};
`;

const StyledControlButton = styled.button`
  height: 100%;
  min-width: ${(props) => props.theme.pxToRem(75)};
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.pxToRem(7)};
  outline: none;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.gray};

    ${StyledControlButtonCaption} {
      color: ${(props) => props.theme.colors.offWhite};
    }

    & svg {
      fill: ${(props) => props.theme.colors.offWhite};
    }
  }
`;

const StyledIcon = styled.div`
  & > svg {
    fill: ${theme.colors.lightGray};
  }
`;

export default ControlButton;
