import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TextWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const Title = styled.h1`
  color: white;
  fontsize: 60px;
`;

export default function Page1() {
  return (
    <div>
      <TextWrapper>
        <Title>page 3</Title>
      </TextWrapper>
      <ImageWrapper>
        <Image src='/images/cover3.jpg' layout='fill' alt='cover' />
      </ImageWrapper>
    </div>
  );
}
