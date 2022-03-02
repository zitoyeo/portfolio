import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";
import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const LT = styled.div``;

const RT = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    filter: invert(100%); //색깔 선명도.
    margin-left: 1rem;
    transition: all 0.5s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(300) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <LT>
        2022 Built and Design by <a href="#home">@JinhoYeo</a>
      </LT>
      <RT>
        Reach out to me via 😀
        <a href="http://twitter.com">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="http://instagram.com">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="http://google.com">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RT>
    </FOOTER>
  );
};

export default Footer;
