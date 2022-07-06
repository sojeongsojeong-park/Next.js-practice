import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const TextWrapper = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  top: calc(50vh - 50px);
  left: calc(50vw - 100px);
  z-index: 99;
`;

export default function Page1() {
  return (
    <div>
      <TextWrapper>
        <h1 style={{ color: "white", textAlign: "center", fontSize: "60px" }}>
          page 1
        </h1>
      </TextWrapper>
      <ImageWrapper>
        <Image src='/images/cover.jpg' layout='fill' alt='cover' />
      </ImageWrapper>
    </div>
  );
}
