import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { WebcamDisplay } from 'components/common/WebcamDisplay/WebcamDisplay';
import { itemSizes } from 'pages/meeting/constants';

interface ParticipantHighlightProps {
  participants: Array<{ isSelf?: boolean; displayName: string; mediaStream: MediaStream | null }>;
}

const ParticipantHighlight: FunctionComponent<ParticipantHighlightProps> = ({ participants }) => {
  return (
    <StyledParticipantHighlight>
      {participants.map((participant, index) => {
        const audioTracks = participant.mediaStream?.getAudioTracks() || [];
        const videoTracks = participant.mediaStream?.getVideoTracks() || [];

        const isMicrophoneOn = audioTracks.some((audioTrack) => audioTrack.readyState === 'live');
        const isWebcamOn = videoTracks.some((videoTrack) => videoTrack.readyState === 'live');

        return (
          <StyledWebcamDisplay
            displayName={participant.displayName}
            isSelf={participant.isSelf}
            key={index}
            isHighlight
            isWebcamOn={isWebcamOn}
            isMicrophoneOn={isMicrophoneOn}
            height={itemSizes.participantHighlightHeight}
            mediaStream={participant.mediaStream}
          />
        );
      })}
    </StyledParticipantHighlight>
  );
};

const StyledWebcamDisplay = styled(WebcamDisplay)`
  &,
  & video {
    border-radius: ${(props) => props.theme.pxToRem(8)};
  }
`;

const StyledParticipantHighlight = styled.div`
  padding: ${itemSizes.participantHighlightPadding}vh 0;
  max-width: ${(itemSizes.stageHeight / 9) * 16}vh;
  margin: 0 auto;
`;

export default ParticipantHighlight;
