import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button, { ButtonSizes, ButtonVariants } from 'components/common/Button/Button';
import VideoCamOn from '../../assets/videocam_on.svg';
import VideoCamOff from '../../assets/videocam_off.svg';
import MicrophoneOn from '../../assets/mic_on.svg';
import MicrophoneOff from '../../assets/mic_off.svg';

import ControlButton from './ControlButton';

interface ControlBarsProps {
  isWebcamOn: boolean;
  onWebcamClick: () => void;
  isMicrophoneOn: boolean;
  onMicrophoneClick: () => void;
}

const ControlBars: FunctionComponent<ControlBarsProps> = ({
  children,
  isWebcamOn,
  onWebcamClick,
  isMicrophoneOn,
  onMicrophoneClick,
}) => {
  return (
    <>
      <div>{children}</div>
      <StyledBottomBar>
        <StyledFlex>
          <ControlButton
            onClick={onMicrophoneClick}
            isOn={isMicrophoneOn}
            OnIcon={MicrophoneOn}
            OffIcon={MicrophoneOff}
            onCaption="Unmute"
            offCaption="Mute"
          />
          <ControlButton
            onClick={onWebcamClick}
            isOn={isWebcamOn}
            OnIcon={VideoCamOn}
            OffIcon={VideoCamOff}
            onCaption="Start Video"
            offCaption="Stop Video"
          />
        </StyledFlex>
        <StyledEndButton
          type="submit"
          fluid
          size={ButtonSizes.small}
          variant={ButtonVariants.danger}
        >
          End
        </StyledEndButton>
      </StyledBottomBar>
    </>
  );
};

const StyledBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.theme.pxToRem(50)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.pxToRem(1)};
  padding-right: ${(props) => props.theme.pxToRem(15)};
  background: ${(props) => props.theme.colors.darkGray};
  opacity: 0.96;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const StyledEndButton = styled(Button)`
  max-width: ${(props) => props.theme.pxToRem(80)};
`;

export default ControlBars;
