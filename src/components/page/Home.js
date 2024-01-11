import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../images/profile-pic.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

// Component: Home
const Home = () => {
  return (
    <div id="Home">
      {/* Container for the hero section */}
      <HomeRoot>
        <HomeContainer>
          {/* Left container for text content */}
          <HomeLeftContainer id="Left">
            <Title>
              Hi There, I am <br /> <NameEmbossed>{Bio.name}</NameEmbossed>
            </Title>
            {/* Typewriter effect for roles */}
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {/* Button to download CV */}
            <ResumeButton href={Bio.resume} target="display">
              Download CV
            </ResumeButton>
          </HomeLeftContainer>

          {/* Right container for the hero image */}
          <HomeRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HomeRightContainer>
        </HomeContainer>
      </HomeRoot>
    </div>
  );
};

export default Home;

// Styled Components

// Container for the entire hero section
export const HomeRoot = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
`;

// Container for the content and image
export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// Left container for text content
export const HomeLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Right container for the hero image
export const HomeRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

// Styling for the hero image
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.white};
  box-shadow: 0 0 5px #f0f8ff;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

// Styling for the title
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

// Styling for the embossed name
export const NameEmbossed = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #fff;
  background: #636363;
  text-shadow: 1px 4px 4px #9c9c9c;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

// Styling for the text loop
export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

// Styling for the span within the text loop
export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

// Styling for the subtitle
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

// Styling for the resume button
export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 200px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.button};
  box-shadow: 1px 4px 4px #9c9c9c;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634,
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;
