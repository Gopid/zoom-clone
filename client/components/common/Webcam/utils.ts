import React, { useEffect } from 'react';

export const cleanUpPreviousStream = (mediaStream: MediaStream) => {
  mediaStream.getTracks().forEach((track) => {
    track.stop();
  });
};

export const setStreamToCurrentAudioState = (mediaStream: MediaStream, audio: boolean) => {
  const audioTracks = mediaStream.getAudioTracks();

  audioTracks.forEach(function (track) {
    track.enabled = audio;
  });
};

export const useVideo = (
  videoRef: React.RefObject<HTMLVideoElement>,
  video: MediaTrackConstraints | boolean,
  audio: boolean,
  onUserMedia?: (stream: MediaStream) => void
) => {
  useEffect(() => {
    async function setVideo() {
      if (!videoRef?.current) return;

      const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video,
        audio: true,
      });

      setStreamToCurrentAudioState(mediaStream, audio);

      const oldStream = videoRef.current.srcObject;
      videoRef.current.srcObject = mediaStream;

      // Only stopping the videoTrack makes the 'on air' light go off, can't resume track after it has been stopped
      // so need to request a new media stream but when doing so we need to clean up the previous one
      if (oldStream) {
        cleanUpPreviousStream(oldStream as MediaStream);
      }

      if (!video) {
        const tracks = (mediaStream as MediaStream).getVideoTracks();

        tracks.forEach(function (track) {
          track.stop();
        });
      }

      if (onUserMedia) onUserMedia(videoRef.current.srcObject as MediaStream);
    }

    setVideo();
  }, [video]);
};

export const useAudio = (
  videoRef: React.RefObject<HTMLVideoElement>,
  audio: boolean,
  onUserMedia?: (stream: MediaStream) => void
) => {
  useEffect(() => {
    if (!videoRef?.current) return;

    const mediaStream = videoRef.current.srcObject;
    if (!mediaStream) return;

    setStreamToCurrentAudioState(mediaStream as MediaStream, audio);

    if (onUserMedia) onUserMedia(videoRef.current.srcObject as MediaStream);
  }, [audio]);
};
