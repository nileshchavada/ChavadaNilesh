import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m2i2n0t', 'template_p4znadm', formRef.current, '1L_HGaZALRJgU8j4o')
      .then(
        () => {
          setOpenSnackbar(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <RootDiv id="contact">
      <Container>
        <LeftSection>
          <Title>Let&apos;s Connect</Title>
          <SubTitle>Tell me about your project</SubTitle>
          <Text>Let&apos;s work together to create something amazing!</Text>
        </LeftSection>
        <RightSection>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Full Name" name="from_name" required />
            <Input type="email" placeholder="Email Address" name="reply_to" required />
            <Input type="text" placeholder="Subject" name="subject" required />
            <TextArea rows="6" placeholder="Message" name="message" required />
            <Button type="submit">Send Message</Button>
          </Form>
        </RightSection>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Container>
    </RootDiv>
  );
};

const RootDiv = styled.div`
  padding: 120px 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: center;
  padding: 80px 30px;
  padding: 4rem;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const RightSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
  font-family: ${({ theme }) => theme.montserrat};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  color: ${({ theme }) => theme.text_secondary};

  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text_secondary};
  }
`;

const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme.montserrat};
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text_secondary};
  }
`;

const Button = styled.button`
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.montserrat};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 14px;
  background: ${({ theme }) => theme.button};
`;

export default Contact;
