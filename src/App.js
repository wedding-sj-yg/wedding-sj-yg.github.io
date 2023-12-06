/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Lottie from 'lottie-react';
import scrollDownLottie from './lotties/animation-scroll-down.json';
import { useEffect, useState } from 'react';

function App() {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <section css={section}>
      <div css={[imageWrapper]}>
        <div css={[imageContent, isFadeIn && fadeIn]}>
          <img
            src="/images/wedding-invitation-image.png"
            alt="청첩장 이미지"
            width="100%"
          />
        </div>
      </div>
      <div css={[scroll, isFadeIn && fadeIn]}>
        <Lottie animationData={scrollDownLottie} style={{ width: '70px' }} />
      </div>
    </section>
  );
}

const section = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
`;

const imageWrapper = css`
  width: 100%;
  max-width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const imageContent = css`
  transition: all 0.4s 1s;
  transform: translateY(10px);
  opacity: 0;
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const fadeIn = css`
  opacity: 1;
  transform: translateY(0px);
`;

const scroll = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -35px;
  opacity: 0;
  transition: all 0.4s 1.5s;
`;

export default App;
