import styled from "styled-components";
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

const ServiceSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;
  position: relative;
  color: white;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  background-color: var(--black);
  background-size: auto 100vh;
  z-index: -1;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 52%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`;
const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;
const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  margin: 3rem 10rem;
  align-items: center;
  justify-content: space-between;
`;

const Service = () => {
  return (
    <ServiceSection>
      <Background>
        <Title>What I Do</Title>
        <Line />
        <Triangle />
      </Background>

      <Content>
        <TextBlock
          topic="Design"
          title="We build awrad winning Designs"
          subText="We help clients to build great design to attract more customers"
        />
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Develope"
          title="I Develope high quality Web & App"
          subText="I build appropriate solution to develope your website & app with best tools available"
        />
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Support"
          title="I Provide support for your digital presence"
          subText="We help clients to build great design to attract more customers"
        />
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Service;
