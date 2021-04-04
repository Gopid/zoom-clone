import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button, { ButtonSizes } from 'components/common/Button/Button';
import Input, { InputSizes } from 'components/common/Input/Input';
import routes, { generatePath } from 'routes';

const Join: React.FunctionComponent = () => {
  const router = useRouter();
  const [meetingId, setMeetingId] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMeetingIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(generatePath(routes.MEETING, { meetingId }));
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  return (
    <StyledContainer>
      <StyledHeading>Join Meeting</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          id="meetingId"
          placeholder="Enter Meeting ID"
          label="Meeting ID or Personal Link Name"
          value={meetingId}
          onChange={handleMeetingIdChange}
          size={InputSizes.medium}
          autoComplete="off"
        />
        <Button disabled={!meetingId} type="submit" fluid size={ButtonSizes.medium}>
          Join
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledHeading = styled.h3`
  margin-top: ${({ theme }) => `${theme.pxToRem(72)}`};
  margin-bottom: ${({ theme }) => `${theme.pxToRem(48)}`};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.pxToRem(60)};
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: ${({ theme }) => theme.pxToRem(360)};
`;

export default Join;
