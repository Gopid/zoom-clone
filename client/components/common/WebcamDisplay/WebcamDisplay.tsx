import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { css, DefaultTheme, ThemedStyledProps } from 'styled-components';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

interface WebcamDisplayProps {
  height: number;
  className?: string;
  // When it's an input
  isWebcamOn?: boolean;
  isInput?: boolean;
  onUserMedia?: (stream: MediaStream) => void;
  // When it's for display
  mediaStream?: MediaStream | null;
}

const WebcamDisplay: FunctionComponent<WebcamDisplayProps> = ({
  height,
  isWebcamOn = false,
  className,
  isInput = false,
  onUserMedia,
  mediaStream = null,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.srcObject = mediaStream;
  }, [mediaStream]);

  if (isInput)
    return (
      <StyledDisplay height={height} isWebcamOn={isWebcamOn} className={className}>
        <Webcam
          videoConstraints={isWebcamOn ? videoConstraints : false}
          audio={false}
          onUserMedia={onUserMedia}
          {...props}
        />
      </StyledDisplay>
    );

  return (
    <StyledDisplay height={height} isWebcamOn={Boolean(mediaStream)} className={className}>
      <video autoPlay playsInline ref={videoRef}></video>
    </StyledDisplay>
  );
};

const screenSizing = ({ height }: { height: number }) => css`
  width: ${(height / 9) * 16}vh;
  height: ${height}vh;
  background: ${(props: ThemedStyledProps<{}, DefaultTheme>) => props.theme.colors.offBlack};
  max-height: ${height}vh;
  max-width: ${(height / 9) * 16}vh;
`;

const StyledDisplay = styled.div<{ height: number; isWebcamOn: boolean }>`
  ${(props) => screenSizing({ height: props.height })}

  & video {
    ${(props) => !props.isWebcamOn && 'display: none;'}
    width: 100%;
    height: 100%;
  }
`;

export default WebcamDisplay;
