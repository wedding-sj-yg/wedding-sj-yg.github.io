/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { Background } from './components/Common';
import {
  ScrollAnimation,
  WeddingPhoto,
  Contacts,
  Information,
  Payments,
  LinkCopy,
} from './components/Sections';
import { FloatingButton, ScrollArrow } from './components/Common';
import { hasCookie, setCookie } from './utils';

const SCROLL_SECTION_LENGTH = 4;

function App() {
  const scrollRef = useRef(null);
  const sentinel = useRef(null);

  const [animation, setAnimation] = useState(null);
  const [isHide, setIsHide] = useState(false);
  const [guide, setGuide] = useState({
    isBackground: true,
    isArrowGuide: true,
    isFloatingGuide: false,
  });

  const handleScroll = () => {
    const elementHeight = scrollRef.current.clientHeight - window.innerHeight;
    const sectionHeight = elementHeight / SCROLL_SECTION_LENGTH;

    setAnimation((prev) => {
      if (
        window.scrollY >= sectionHeight &&
        window.scrollY < sectionHeight * 2
      ) {
        return 'FIRST';
      } else if (
        window.scrollY >= sectionHeight * 2 &&
        window.scrollY < sectionHeight * 3
      ) {
        return 'SECOND';
      } else if (window.scrollY >= sectionHeight * 3) {
        return 'THIRD';
      } else {
        return null;
      }
    });
  };

  const handleObserver = (entries) => {
    setIsHide(entries[0].isIntersecting);
  };

  const handleClickCloseGuide = () => {
    setGuide((prev) => {
      if (prev.isArrowGuide) {
        return { ...prev, isArrowGuide: false, isFloatingGuide: true };
      } else if (prev.isFloatingGuide) {
        setCookie();

        return { ...prev, isBackground: false, isFloatingGuide: false };
      } else {
        return prev;
      }
    });
  };

  useEffect(() => {
    const isCookie = hasCookie();

    setGuide((prev) => {
      return isCookie
        ? {
            isBackground: false,
            isArrowGuide: false,
            isFloatingGuide: false,
          }
        : prev;
    });

    let observer;

    if (sentinel) {
      observer = new window.IntersectionObserver(handleObserver);
      observer.observe(sentinel.current);
    }

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer && observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={root}>
      {guide.isBackground && <Background onClose={handleClickCloseGuide} />}
      <ScrollAnimation scrollRef={scrollRef} animation={animation} />
      <WeddingPhoto />
      <Contacts />
      <Information />
      <Payments />
      <LinkCopy />
      <ScrollArrow
        animation={animation}
        guide={guide}
        isHide={isHide}
        onClose={handleClickCloseGuide}
      />
      <div ref={sentinel} />
      <FloatingButton
        guide={guide}
        isHide={isHide}
        onClose={handleClickCloseGuide}
      />
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

const footer = css`
  padding-bottom: 30px;
  text-align: center;
  font-size: 10px;
`;

export default App;
