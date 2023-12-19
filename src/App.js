/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import Lottie from 'lottie-react';
import scrollDownBlackLottie from './lotties/animation-scroll-down-black.json';
import scrollDownWhiteLottie from './lotties/animation-scroll-down-white.json';
import ScrollSection from './components/ScrollSection';
import { useEffect, useRef, useState } from 'react';
import InformationSection from './components/InformationSection';
import PaySection from './components/PaySection';
import PhotoSection from './components/PhotoSection';
import ContactSection from './components/ContactSection';
import LinkCopySection from './components/LinkCopySection';
import Modal from './components/Modal';

const SCROLL_SECTION_LENGTH = 4;

function App() {
  const scrollRef = useRef(null);
  const sentinel = useRef(null);

  const [animation, setAnimation] = useState(null);
  const [isHide, setIsHide] = useState(false);
  const [isModal, setIsModal] = useState(true);

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

  const handleObserver = (entries) => {
    setIsHide(entries[0].isIntersecting);
  };

  useEffect(() => {
    let observer;

    if (sentinel) {
      observer = new window.IntersectionObserver(handleObserver);
      observer.observe(sentinel.current);
    }

    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer && observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={root}>
      {isModal && <Modal onClose={() => setIsModal(false)} />}
      <ScrollSection scrollRef={scrollRef} animation={animation} />
      <PhotoSection />
      <ContactSection />
      <InformationSection />
      <PaySection />
      <LinkCopySection />
      <div css={[scroll, appearFromBottomAnimation, isHide && hideAnimation]}>
        <Lottie
          animationData={
            animation === 'FIRST'
              ? scrollDownWhiteLottie
              : scrollDownBlackLottie
          }
          style={{ width: '70px' }}
        />
      </div>
      <div ref={sentinel}></div>
      <div css={buttonWrapper}>
        {isModal && (
          <div css={guideArrow}>
            <img src="/images/icon-guide-arrow.png" alt="가이드 화살표" />
          </div>
        )}
        <button
          type="button"
          css={[ourStoryButton, isHide && hideAnimation]}
          onClick={() =>
            window.open('https://www.instagram.com/ssik_zip/', '_blank')
          }
        >
          <img
            src="/images/icon-floating-black.png"
            alt="우리의 이야기"
            width={40}
          />
        </button>
      </div>
      <footer css={footer}>
        © Directed by YeoGyu, Developed by SeongJun. All Rights Reserved.
      </footer>
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

const buttonWrapper = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
`;

const guideAnimation = keyframes`
  0% {
    transform: translateY(10px) rotate(90deg);
  }
  50% {
    transform: translateY(0px) rotate(90deg);
  }
  100% {
    transform: translateY(10px) rotate(90deg);
  }
`;

const guideArrow = css`
  animation: ${guideAnimation} 1s ease infinite;
`;

const ourStoryButton = css`
  display: inline-block;
  background: #dcf2de;
  padding: 8px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  box-shadow:
    rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px,
    rgba(0, 0, 0, 0.15) 0px 8px 30px;

  img {
    display: block;
  }
`;

const footer = css`
  padding-bottom: 30px;
  text-align: center;
  font-size: 10px;
`;

const hideAnimation = css`
  opacity: 0;
  transition: all 0.2s;
`;

export default App;
