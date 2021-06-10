import React, { FunctionComponent, useRef } from 'react';
import { useVideo, useAudio } from './utils';

interface WebcamProps {
  onUserMedia?: (stream: MediaStream) => void;
  video: MediaTrackConstraints | boolean;
  audio: boolean;
}

const Webcam: FunctionComponent<WebcamProps> = ({ onUserMedia, video, audio }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useVideo(videoRef, video, audio, onUserMedia);

  useAudio(videoRef, audio);

  return <video autoPlay playsInline ref={videoRef} muted={true}></video>;
};

export default Webcam;
