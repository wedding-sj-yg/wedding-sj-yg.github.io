/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SpeechBubble from '../SpeechBubble';

const FloatingButton = ({ guide, isHide, onClose }) => {
  return (
    <div
      css={[
        buttonWrapper,
        guide.isArrowGuide &&
          css`
            z-index: 1;
          `,
      ]}
    >
      {guide.isFloatingGuide && (
        <>
          <SpeechBubble
            highlight="꾹 눌러"
            title="우리 이야기 둘러보기"
            text="신랑, 신부가 궁금하다면 아이콘을 눌러주세요!"
            bubbleStyle={bubbleStyle}
            onClose={onClose}
          />
          <img
            src="/images/icon-inactive.png"
            alt="플로팅 버튼 가이드 표시"
            width={86}
            css={guideInactive}
          />
        </>
      )}
      <button
        type="button"
        css={[ourStoryButton, isHide && hideAnimation]}
        onClick={() => window.open('https://wedding-sj-yg.oopy.io/', '_blank')}
      >
        <img
          src="/images/icon-floating-black.png"
          alt="플로팅 버튼"
          width={40}
        />
      </button>
    </div>
  );
};

const buttonWrapper = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
`;

const guideInactive = css`
  position: absolute;
  bottom: -15px;
  left: -15px;
`;

const ourStoryButton = css`
  position: relative;
  z-index: 2;
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

const hideAnimation = css`
  opacity: 0;
  transition: all 0.2s;
`;

const bubbleStyle = css`
  bottom: calc(100% + 30px);
  right: 0;

  &:after {
    bottom: -9px;
    right: 20px;
  }
`;

export default FloatingButton;
