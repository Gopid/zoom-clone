import React, { FunctionComponent, useState, useRef, useLayoutEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ControlBars from './components/ControlBars/ControlBars';
import ParticipantHighlight from './components/ParticipantHighlight/Participanthighlight';
import { InputWebcamDisplay } from 'components/common/WebcamDisplay/WebcamDisplay';
import { itemSizes } from 'pages/meeting/constants';

const Meeting: FunctionComponent = () => {
  const [userMediaStream, setUserMediaStream] = useState<MediaStream | null>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(true);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(true);
  const displayName =
    'Other One Other One Other One Other One Other One Other One Other One Other One';

  const toggleWebcam = () => {
    setIsWebcamOn(!isWebcamOn);
    setUserMediaStream(null);
  };

  const toggleMicrophone = () => {
    setIsMicrophoneOn(!isMicrophoneOn);
  };

  const onUserMedia = (stream: MediaStream) => {
    setUserMediaStream(stream);
  };

  return (
    <ControlBars
      isWebcamOn={isWebcamOn}
      onWebcamClick={toggleWebcam}
      isMicrophoneOn={isMicrophoneOn}
      onMicrophoneClick={toggleMicrophone}
    >
      <GlobalStyles />
      <ParticipantHighlight
        participants={[
          {
            isSelf: true,
            displayName,
            mediaStream: userMediaStream,
          },
        ]}
      />
      <StyledStage>
        <InputWebcamDisplay
          displayName={displayName}
          isWebcamOn={isWebcamOn}
          isMicrophoneOn={isMicrophoneOn}
          height={itemSizes.stageHeight}
          onUserMedia={onUserMedia}
        />
      </StyledStage>
    </ControlBars>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.black};
  }
`;

const StyledStage = styled.div`
  display: flex;
  justify-content: center;
`;

export default Meeting;
