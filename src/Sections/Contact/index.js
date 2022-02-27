import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedIn from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  color: var(--white);
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;
  a {
    &:not(::last-child) {
      margin-right: 2rem;
    }
  }
  &:hover {
    img {
      filter: invert(20%);
    }
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Title>Get in touch</Title>
      <Icons>
        <a href="http://facebook.com/">
          <img src={Facebook} alt="FaceBook" />
        </a>{" "}
        <a href="http://linkedin.com/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>{" "}
        <a href="http://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>{" "}
        <a href="http://instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
    </ContactSection>
  );
};

export default Contact;
