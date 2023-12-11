/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import Lottie from 'lottie-react';
import scrollDownLottie from './lotties/animation-scroll-down.json';
import ani from './lotties/ani.json';
import { useEffect, useRef, useState } from 'react';

const SCROLL_SECTION_LENGTH = 4;

function App() {
  const scrollRef = useRef(null);

  const [animation, setAnimation] = useState(null);

  const handleScroll = (e) => {
    const elementHeight = scrollRef.current.clientHeight - window.innerHeight;
    const sectionHeight = elementHeight / SCROLL_SECTION_LENGTH;

    if (window.scrollY >= sectionHeight && window.scrollY < sectionHeight * 2) {
      setAnimation('FIRST');
    } else if (
      window.scrollY >= sectionHeight * 2 &&
      window.scrollY < sectionHeight * 3
    ) {
      setAnimation('SECOND');
    } else if (window.scrollY >= sectionHeight * 3) {
      setAnimation('THIRD');
    } else {
      setAnimation(null);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={root}>
      <section ref={scrollRef} css={scrollSection}>
        <div css={content}>
          <div css={[contentWrapper, imageWrapper]}>
            <div css={[imageContent, appearFromBottomAnimation]}>
              <img
                src="/images/wedding-invitation-image.png"
                alt="청첩장 이미지"
                width="100%"
              />
            </div>
          </div>
          <div
            css={[
              contentWrapper,
              animation === 'FIRST'
                ? headBlackBackground
                : animation === 'SECOND' || animation === 'THIRD'
                  ? headWhiteBackground
                  : headBackgroundReverse,
            ]}
          >
            <h1 css={[head, animation === 'FIRST' && headTransition]}>
              배우자가 되겠습니다.
            </h1>
          </div>
          <div
            css={[
              contentWrapper,
              animation === 'SECOND'
                ? headWhiteBackground
                : headBackgroundReverse,
            ]}
          >
            <h2
              css={[
                head,
                multiLineTextWithBlackColor,
                animation === 'SECOND' && headTransition,
              ]}
            >
              아내에게 배우자는 마음과
              <br />
              남편에게 배우자는 자세와
              <br />
              서로에게 배우자는 의지로
            </h2>
          </div>
          <div
            css={[
              contentWrapper,
              animation === 'THIRD'
                ? headWhiteBackground
                : headBackgroundReverse,
            ]}
          >
            <h2
              css={[
                head,
                multiLineTextWithBlackColor,
                animation === 'THIRD' && headTransition,
              ]}
            >
              한평생 서로에게
              <br />
              가장 좋은 배우자가 되겠습니다
              <br />
              저희의 배움을 응원해주세요
              <br />
              <Lottie
                animationData={ani}
                style={{ width: '70px', margin: '0 auto' }}
              />
            </h2>
          </div>
        </div>
      </section>
      <div css={[scroll, appearFromBottomAnimation]}>
        <Lottie animationData={scrollDownLottie} style={{ width: '70px' }} />
      </div>
    </div>
  );
}

const root = css`
  width: 100%;
  height: 100%;
`;

const scrollSection = css`
  position: relative;
  width: 100%;
  height: 400vh;
`;

const content = css`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const contentWrapper = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imageWrapper = css`
  max-width: 320px;
  margin-left: -160px;
  transform: translateX(0%);
`;

const imageContent = css`
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

const appearFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const appearFromBottomAnimation = css`
  animation: ${appearFromBottom} 1s ease;
`;

const headBlackBackground = css`
  background: #000;
  transition: all 0.4s;
`;

const headWhiteBackground = css`
  background: #fff;
  transition: all 0.4s;
`;

const headBackgroundReverse = css`
  background: transparent;
  transition: all 0.4s;
`;

const head = css`
  text-align: center;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.6s;
  color: #fff;
`;

const multiLineTextWithBlackColor = css`
  color: #000;
  line-height: 1.5;
`;

const headTransition = css`
  opacity: 1;
  transform: translateY(0px);
`;

export default App;
