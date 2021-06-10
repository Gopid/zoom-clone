import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import Webcam from 'components/common/Webcam/Webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

interface BaseProps {
  displayName: string;
  height: number;
  className?: string;
  isWebcamOn: boolean;
  isMicrophoneOn: boolean;
  isHighlight?: boolean;
}

type mediaStream = MediaStream | null;
type onUserMedia = (stream: MediaStream) => void;

interface BaseWebcamDisplayProps extends BaseProps {
  // When it's an input
  isInputStream?: boolean;
  onUserMedia?: onUserMedia;
  // When it's for display
  isSelf?: boolean;
  mediaStream?: mediaStream;
}

const BaseWebcamDisplay: FunctionComponent<BaseWebcamDisplayProps> = ({
  displayName,
  height,
  isWebcamOn,
  isMicrophoneOn,
  className,
  isSelf = false,
  isInputStream = false,
  isHighlight = false,
  onUserMedia,
  mediaStream = null,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.srcObject = mediaStream;
  }, [mediaStream]);

  return (
    <StyledDisplay height={height} isWebcamOn={isWebcamOn} className={className}>
      {isInputStream ? (
        <Webcam
          video={isWebcamOn ? videoConstraints : false}
          audio={isMicrophoneOn}
          onUserMedia={onUserMedia}
          {...props}
        />
      ) : (
        <video autoPlay playsInline ref={videoRef} muted={isSelf || isInputStream}></video>
      )}
      <StyledDisplayName isWebcamOn={isWebcamOn} isHighlight={isHighlight}>
        {displayName}
      </StyledDisplayName>
    </StyledDisplay>
  );
};

interface InputWebcamDisplayProps extends BaseProps {
  onUserMedia: onUserMedia;
}

export const InputWebcamDisplay: FunctionComponent<InputWebcamDisplayProps> = (props) => {
  return <BaseWebcamDisplay isInputStream {...props} />;
};

interface WebcamDisplayProps extends BaseProps {
  isSelf?: boolean;
  mediaStream: mediaStream;
}

export const WebcamDisplay: FunctionComponent<WebcamDisplayProps> = (props) => {
  return <BaseWebcamDisplay {...props} />;
};

const screenSizing = ({ height }: { height: number }) => css`
  width: ${(height / 9) * 16}vh;
  height: ${height}vh;
  background: ${(props: ThemedStyledProps<{}, DefaultTheme>) => props.theme.colors.offBlack};
  max-height: ${height}vh;
  max-width: ${(height / 9) * 16}vh;
`;

const StyledDisplayName = styled.p<{ isHighlight: boolean; isWebcamOn: boolean }>`
  color: ${(props) => props.theme.colors.offText};
  font-size: ${(props) => props.theme.pxToRem(props.isHighlight ? 20 : 60)};
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 85vw;
  padding: 0 ${(props) => props.theme.pxToRem(20)};
  text-align: center;
  white-space: nowrap;

  // Either show display name or video stream
  & {
    ${(props) => props.isWebcamOn && 'display: none;'}
  }
`;

const StyledDisplay = styled.div<{ height: number; isWebcamOn: boolean }>`
  ${(props) => screenSizing({ height: props.height })}
  display: flex;
  align-items: center;
  justify-content: center;

  & video {
    width: 100%;
    height: 100%;
  }

  // Either show display name or video stream
  & video {
    ${(props) => !props.isWebcamOn && 'display: none;'}
  }
`;
