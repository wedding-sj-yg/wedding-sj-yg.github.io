/** @jsxImportSource @emotion/react */
import Lottie from 'lottie-react';
import { css, keyframes } from '@emotion/react';
import scrollDownBlackLottie from '../../../lotties/animation-scroll-down-black.json';
import scrollDownWhiteLottie from '../../../lotties/animation-scroll-down-white.json';
import SpeechBubble from '../SpeechBubble';

const ScrollArrow = ({ animation, guide, isHide, onClose }) => {
  return (
    <div
      css={[
        scroll,
        appearFromBottomAnimation,
        isHide && hideAnimation,
        guide.isFloatingGuide &&
          css`
            z-index: 1;
          `,
      ]}
    >
      {guide.isArrowGuide && (
        <>
          <SpeechBubble
            highlight="화살표를 따라"
            title="청첩장 전체보기"
            text="자세한 내용이 궁금하다면, 아래로 내려주세요!"
            bubbleStyle={bubbleStyle}
            onClose={onClose}
          />
          <img
            src="/images/icon-inactive.png"
            alt="스크롤 화살표 가이드 표시"
            width={60}
            css={guideArrowInactive}
          />
        </>
      )}
      <Lottie
        animationData={
          animation === 'FIRST' ? scrollDownWhiteLottie : scrollDownBlackLottie
        }
        style={{ width: '70px' }}
      />
    </div>
  );
};

const scroll = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -35px;
  z-index: 1001;
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

const guideArrowInactive = css`
  position: absolute;
  bottom: 8px;
  left: 4px;
`;

const hideAnimation = css`
  opacity: 0;
  transition: all 0.2s;
`;

const bubbleStyle = css`
  bottom: calc(100% + 20px);
  left: 50%;
  margin-left: -145px;

  &:after {
    bottom: -9px;
    right: 135px;
  }
`;

export default ScrollArrow;
