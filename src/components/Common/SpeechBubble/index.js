/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SpeechBubble = ({ highlight, title, text, bubbleStyle, onClose }) => {
  return (
    <div css={[root, bubbleStyle]}>
      <button type="button" css={closeButton} onClick={onClose}>
        <img src="/images/icon-close.png" alt="닫기" width={16} />
      </button>
      <h3 css={titleStyle}>
        <span css={highlighted}>
          <span css={zIndex}>{highlight}</span>
        </span>{' '}
        {title}
      </h3>
      <p css={textStyle}>{text}</p>
    </div>
  );
};

const root = css`
  position: absolute;
  width: 290px;
  border-radius: 15px;
  padding: 18px;
  background: #fff;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    border-top: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
  }
`;

const closeButton = css`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const titleStyle = css`
  margin: 0 0 5px;
`;

const textStyle = css`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  word-break: keep-all;
  margin: 0;
`;

const highlighted = css`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(52, 232, 158, 0.5);
  }
`;

const zIndex = css`
  position: relative;
  z-index: 1;
`;

export default SpeechBubble;
