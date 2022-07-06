import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <ImageWrapper>
      <Image src='/images/cover.jpg' layout='fill' alt='cover' />
    </ImageWrapper>
  );
}
