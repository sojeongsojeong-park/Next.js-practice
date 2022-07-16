import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../reducers/globalReducer";

const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  const outerRef = useRef();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.global);

  const handleWheel = (e) => {
    const { deltaY } = e;
    const { scrollY, innerHeight } = window;
    if (deltaY > 0) {
      //아래 방향으로 스크롤
      if (scrollY >= 0 && scrollY < innerHeight) {
        //스크롤이 1페이지에 머물러 있다면,
        //2페이지로 넘어간다.
        dispatch(changePage(2));
      } else if (scrollY >= innerHeight && scrollY < innerHeight * 2) {
        //스크롤이 2페이지에 머물러 있다면,
        //3페이지로 넘어간다.
        dispatch(changePage(3));
      } else {
        //3페이지에서 아래 방향으로 스크롤이 발생했을 때,
        // 아무것도 안하거나, 그냥 계속 3페이지로 설정
        dispatch(changePage(3));
      }
    } else {
      //위 방향으로 스크롤
      if (scrollY >= 0 && scrollY < innerHeight) {
        //스크롤이 1페이지에 머물러 있다면,
        //그냥 계속 1페이지
        dispatch(changePage(1));
      } else if (scrollY >= innerHeight && scrollY < innerHeight * 2) {
        //스크롤이 2페이지에 머물러 있다면,
        //1페이지로 넘어간다.
        dispatch(changePage(1));
      } else {
        //스크롤이 3페이지에 머물러 있다면,
        //2페이지로 넘어간다.
        dispatch(changePage(2));
      }
    }
  };

  useEffect(() => {
    const pageHeight = window.innerHeight;
    switch (globalState.currentPage) {
      case 1:
        window.scrollTo(0, 0);
        break;
      case 2:
        window.scrollTo(0, pageHeight);
        break;
      case 3:
        window.scrollTo(0, pageHeight * 2);
        break;
    }
  }, [globalState.currentPage]);
  useEffect(() => {
    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div ref={outerRef}>
      <Head>
        <title>{`Page${globalState.currentPage}`}</title>
      </Head>
      <Page>
        <Page1 />
      </Page>
      <Page>
        <Page2 />
      </Page>
      <Page>
        <Page3 />
      </Page>
    </div>
  );
}
