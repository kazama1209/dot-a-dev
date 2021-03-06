import React, { useEffect } from "react";
import Head from "next/head";

import { useMediaQuery } from "react-responsive";

import { ISourceOptions } from "tsparticles";
import { StyledParticles, bubbles } from "styles/home/Particles";
import { StyledContentBox } from "styles/common";

import ShutterAnimation from "components/home/ShutterAnimation";
import BgVideo from "components/home/BgVideo";
import Slider from "components/home/Slider";
import Panels from "components/home/Panels";
import Carousel from "components/home/Carousel";
import Cards from "components/home/Cards";

const Home: React.FC = () => {
  const isMobileScreen: boolean = useMediaQuery({
    query: "(max-width: 599px)",
  });

  /* スクロール禁止 */
  const noScroll = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
  };

  /* スクロール禁止を付与 */
  const addNoScroll = () => {
    // @ts-ignore
    document.addEventListener("mousewheel", noScroll, {
      passive: false,
    });
  };

  /* スクロール禁止を解除 */
  const removeNoScroll = () => {
    // @ts-ignore
    document.removeEventListener("mousewheel", noScroll, {
      passive: false,
    });
  };

  useEffect(() => {
    /* ページトップまで戻す */
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    addNoScroll();

    /* シャッターアニメーションが終わってからスクロールが可能になる事を想定 */
    setTimeout(() => {
      removeNoScroll();
    }, 2400);
  });

  return (
    <React.Fragment>
      <Head>
        <title>Dot.A-dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ShutterAnimation />
      <BgVideo />
      <StyledParticles options={bubbles as ISourceOptions} />
      <StyledContentBox margin={{ top: 32 }}>
        <Carousel />
      </StyledContentBox>
      {!isMobileScreen && (
        <StyledContentBox margin={{ top: 80 }}>
          <Panels />
        </StyledContentBox>
      )}
      <StyledContentBox margin={{ top: 80 }}>
        <Slider />
      </StyledContentBox>
      <StyledContentBox margin={{ top: 72, bottom: 80 }}>
        <Cards />
      </StyledContentBox>
    </React.Fragment>
  );
};

export default Home;
