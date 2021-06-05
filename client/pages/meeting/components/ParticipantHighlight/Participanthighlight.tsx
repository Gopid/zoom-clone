import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import WebcamDisplay from 'components/common/WebcamDisplay/WebcamDisplay';
import { itemSizes } from 'pages/meeting/constants';

interface ParticipantHighlightProps {
  mediaStreams: Array<MediaStream | null>;
}

const ParticipantHighlight: FunctionComponent<ParticipantHighlightProps> = ({ mediaStreams }) => {
  return (
    <StyledParticipantHighlight>
      {mediaStreams.map((mediaStream, index) => (
        <StyledWebcamDisplay
          key={index}
          isWebcamOn
          height={itemSizes.participantHighlightHeight}
          mediaStream={mediaStream}
        />
      ))}
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
