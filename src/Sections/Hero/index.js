import styled from "styled-components";
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blobWhite.png";
import Purple from "../../assets/blobPurple.png";
import Arrow from "../../assets/Arrow Right.svg";

const HerosSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  color: var(--white);
  display: flex;
  justify-content: centers;
  position: relative;
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem +2vw);
  z-index: 5;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
`;
const LeftBlock = styled.div``;
const Topic = styled.div``;
const Circle = styled.span``;
const Title = styled.h1``;
const SubText = styled.h5``;
const CTA = styled.button``;

const HeroSection = () => {
  return (
    <HerosSection>
      <Blobs>
        <PinkBlob>
          <img src={Pink} alt="Pink Blob" width="400" height="400" />
        </PinkBlob>
        <WhiteBlob>
          <img src={White} alt="White Blob" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={Purple} alt="Purple Blob" width="400" height="400" />
        </PurpleBlob>
      </Blobs>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle /> <span>We Build Web</span>
          </Topic>
          <Title>Transforming your digital presence</Title>
          <SubText>
            we help fast growing companies build award winning websites
          </SubText>
          <CTA>
            Get in touch &nbsp{" "}
            <img src={Arrow} alt="CTA" width="400" height="400" />
          </CTA>
        </LeftBlock>
      </MainContent>
    </HerosSection>
  );
};

export default HeroSection;
