import React, { useRef, FunctionComponent, useState } from 'react';
import Webcam from 'react-webcam';
import Recording from 'components/Recording/Recording';

const Meeting: FunctionComponent = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);

  return (
    <>
      {isWebcamOn && <Webcam audio={false} ref={webcamRef} />}
      <Recording webcamRef={webcamRef} />
      <button onClick={() => setIsWebcamOn(!isWebcamOn)}>Toggle Webcam</button>
      <button onClick={() => setIsMicrophoneOn(!isMicrophoneOn)}>Toggle Microphone</button>
    </>
  );
};

export default Meeting;
