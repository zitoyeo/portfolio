import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48rem) {
    display: none;
  }

  a {
    font-weight: 600;
    color: white;
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(0.9);
  }
`;

const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  display: none;

  @media only Screen and (max-width: 48rem) {
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "lotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "lotate(0)")};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  opacity: ${(props) => (props.clicked ? "1" : "0")};
  visibility: ${(props) => (props.clicked ? "visible " : "hidden")};

  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;

  a {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Headers>
      <Logo>
        <img src={logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact" onClick={() => {}}>
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>
          Home
        </a>
        <a href="#about" onClick={() => handleClick()}>
          About Us
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Services
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
