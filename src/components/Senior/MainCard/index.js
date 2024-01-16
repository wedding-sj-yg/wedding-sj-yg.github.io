/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const MainCard = () => {
  return (
    <div>
      <div css={imageCrop}>
        <img
          src="/images/senior/main-image.jpeg"
          alt="메인 이미지"
          width="100%"
        />
      </div>
      <div css={textWrapper}>
        <div css={textContents}>
          <ul css={list}>
            <li css={listItem}>
              <div css={colorItem}>GROOM</div>
              <div css={name}>이성준</div>
            </li>
            <li css={listItem}>
              <div css={colorItem}>BRIDE</div>
              <div css={name}>김여규</div>
            </li>
          </ul>
        </div>
        <div css={date}>
          2024.03.09 SAT PM 02:00
          <br />
          아펠가모 공덕 라로브홀
        </div>
      </div>
    </div>
  );
};

const imageCrop = css`
  width: 100%;
  height: 430px;
  overflow: hidden;
`;

const textWrapper = css`
  padding: 30px 18px;
`;

const textContents = css`
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 24px;
    background: #f7ab95;
    opacity: 0.4;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const list = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const listItem = css`
  text-align: center;
`;

const colorItem = css`
  margin-bottom: 6px;
  font-size: 12px;
  color: #f7ab95;
  opacity: 0.6;
`;

const name = css`
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-weight: 600;
  letter-spacing: 0.37em;
  line-height: 1.4em;
`;

const date = css`
  margin-top: 25px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.08em;
  line-height: 1.5em;
  color: #333333;
`;

export default MainCard;
