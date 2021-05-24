import { FunctionComponent, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function WebCam({ requestedMedia }: any) {
  const videoRef: any = useRef(null);
  const [mediaStream, setMediaStream] = useState<any>(null);

  function handleCanPlay() {
    videoRef.current.play();
  }

  useEffect(() => {
    async function enableStream() {
      const stream: any = await navigator.mediaDevices.getUserMedia(requestedMedia);
      setMediaStream(stream);

      videoRef.current.srcObject = stream;
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track: any) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />;
}

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

const Meeting: FunctionComponent = () => {
  return <WebCam requestedMedia={CAPTURE_OPTIONS} />;
};

export default Meeting;
