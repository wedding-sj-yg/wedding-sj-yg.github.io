/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Lottie from 'lottie-react';
import scrollDownLottie from './lotties/animation-scroll-down.json';

function App() {
  return (
    <div>
      <section css={section}>
        <div css={imageWrapper}>
          <img
            src="/images/wedding-invitation-image.png"
            alt="청첩장 이미지"
            width="100%"
          />
        </div>
        <div css={scroll}>
          <Lottie animationData={scrollDownLottie} style={{ width: '70px' }} />
        </div>
      </section>
    </div>
  );
}

const section = css`
  padding: 24px;
`;

const imageWrapper = css`
  max-width: 450px;
  margin: 0 auto;
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const scroll = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -35px;
`;

export default App;
