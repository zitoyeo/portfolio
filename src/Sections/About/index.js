import waves from "../../assets/waves.svg";
import hand from "../../assets/hand.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import styled, { keyframes } from "styled-components";

const move = keyframes`
    0% { transform: translateY(-5px)}
    50% { transform: translateY(10px) translateX(10px)}
    100% { transform: translateY(-5px)}
`;

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;

const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
`;
const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150% 60px 70px 0 0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
`;
const AboutText = styled.div`
  position: relative;
  width: 50%;
`;
const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
`;
const Text = styled.h4`
  font-size: calc(0.5rem+ 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--black);
  margin-right: 0;
  margin-top: 1rem;
`;
const About = () => {
  return (
    <AboutSection>
      <Waves src={waves} alt="waves" width="400" height="400" />

      <Hand>
        <img src={hand} alt="Hand" width="400" height="400" />
      </Hand>

      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="Hand" width="400" height="400" />
          </Rocket>

          <AboutText>
            <Human>
              <img src={human} alt="Hand" width="400" height="400" />
            </Human>
            <Text>
              안녕하십니까 세상을 디자인 하는 개발자 여진호 입니다. <br />
              방문해주셔서 감사합니다.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black}" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
