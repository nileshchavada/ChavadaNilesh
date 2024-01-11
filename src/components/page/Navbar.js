import React, { useState } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/constants';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper id="about">
      <NavbarContainer>
        <NavLogo href={'/'}>
          <Span>NC</Span>
        </NavLogo>
        {isOpen ? ( // Display close icon when menu is open
          <MobileIcon onClick={toggleMenu}>
            <CloseIcon />
          </MobileIcon>
        ) : (
          <MobileIcon onClick={toggleMenu}>
            <MenuIcon />
          </MobileIcon>
        )}
        <NavItems>
          {NAV_LINKS.map((link) => (
            <NavLink key={link} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          {SOCIAL_LINKS.map((link) => (
            <SocialButton key={link.href} href={link.href} target="_blank">
              {link.icon}
            </SocialButton>
          ))}
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {NAV_LINKS.map((link) => (
              <MobileLink key={link.href} href={link.href} onClick={toggleMenu}>
                {link.label}
              </MobileLink>
            ))}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {SOCIAL_LINKS.map((link) => (
                <SocialButton key={link.href} href={link.href} target="_blank">
                  {link.icon}
                </SocialButton>
              ))}
            </div>
          </MobileMenu>
        )}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  font-family: ${({ theme }) => theme.montserrat};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: inherit;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

const Span = styled.div`
  padding: 0px 0px 0px 45px;
  font-family: ${({ theme }) => theme.montserrat};
  color: inherit;
  font-weight: bold;
  font-size: 18px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 700;
  font-family: ${({ theme }) => theme.montserrat};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    background-color: red;
    font-weight: bold; /* Added bolder font-weight for active link */
  }
`;

const SocialButton = styled.a`
  display: flex;
  height: 100%;
  cursor: pointer;
  padding: 0 7px; /* Adjusted padding for better spacing */
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  margin-top: 30px;
  color: inherit;
  transition: all 0.6s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
    padding: 0 0px; /* Adjusted padding for better spacing */
    padding-right: 7px; /* Adjusted padding for better spacing */
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    background-color: red;
    font-weight: bold; /* Added bolder font-weight for active link */
  }
`;
