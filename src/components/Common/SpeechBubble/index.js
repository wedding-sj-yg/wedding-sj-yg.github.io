/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SpeechBubble = () => {
  return (
    <div css={root}>
      <h3 css={title}>
        <span css={highlighted}>
          <span css={zIndex}>꾹 눌러</span>
        </span>{' '}
        우리 이야기 둘러보기
      </h3>
      <p css={text}>신랑, 신부가 궁금하다면 아이콘을 눌러주세요!</p>
    </div>
  );
};

const root = css`
  position: absolute;
  bottom: calc(100% + 30px);
  right: 0;
  width: 290px;
  border-radius: 15px;
  padding: 18px;
  background: #fff;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    bottom: -9px;
    right: 20px;
    border-top: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
  }
`;

const title = css`
  margin: 0 0 5px;
`;

const text = css`
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
