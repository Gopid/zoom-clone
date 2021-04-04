import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

const Meeting: FunctionComponent = () => {
  const router = useRouter();
  const { meetingId } = router.query;
  return <h1>{meetingId}</h1>;
};

export default Meeting;
