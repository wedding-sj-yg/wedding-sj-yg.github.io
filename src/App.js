/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import Lottie from 'lottie-react';
import scrollDownBlackLottie from './lotties/animation-scroll-down-black.json';
import scrollDownWhiteLottie from './lotties/animation-scroll-down-white.json';
import ScrollSection from './components/ScrollSection';
import { useEffect, useRef, useState } from 'react';
import InformationSection from './components/InformationSection';
import PaySection from './components/PaySection';

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
      <ScrollSection scrollRef={scrollRef} animation={animation} />
      <InformationSection />
      <PaySection />
      <div css={[scroll, appearFromBottomAnimation]}>
        <Lottie
          animationData={
            animation === 'FIRST'
              ? scrollDownWhiteLottie
              : scrollDownBlackLottie
          }
          style={{ width: '70px' }}
        />
      </div>
      <button type="button" css={ourStoryButton}>
        <img src="/images/icon-our-story.png" alt="우리의 이야기" width={52} />
      </button>
    </div>
  );
}

const root = css`
  width: 100%;
  height: 100%;
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

const ourStoryButton = css`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: inline-block;
  /* background: rgba(52, 232, 158, 1); */
  background: #1a3e25;
  padding: 5px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  z-index: 10;

  img {
    display: block;
  }
`;

export default App;
