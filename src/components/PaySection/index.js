/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { css } from '@emotion/react';

const PaySection = () => {
  return (
    <div css={root}>
      <div css={box}>
        <div css={sectionTitle}>신부측 계좌번호</div>
        <ul>
          <li css={item}>
            <div css={bankSection}>
              <span css={bank}>토스뱅크</span>
              <span>1000-2013-4045</span>
            </div>
            <div css={name}>신부 김여규</div>
          </li>
          <li css={item}>
            <div css={bankSection}>
              <span css={bank}>토스뱅크</span>
              <span>1000-2013-4045</span>
            </div>
            <div css={name}>이경자</div>
          </li>
          <li css={item}>
            <div css={bankSection}>
              <span css={bank}>토스뱅크</span>
              <span>1000-2013-4045</span>
            </div>
            <div css={name}>김연복</div>
          </li>
        </ul>
      </div>
      <div>
        <div>신랑측 계좌번호</div>
        <ul>
          <li>신랑 이성준</li>
          <li>이영숙</li>
          <li>이용호</li>
        </ul>
      </div>
    </div>
  );
};

const root = css`
  padding: 60px 24px 40px;
`;

const box = css`
  padding: 16px;
  background: rgba(240, 240, 240, 0.5);
  border-radius: 16px;
`;

const sectionTitle = css`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 700;
`;

const item = css`
  font-size: 13px;
  font-weight: 500;

  & + & {
    margin-top: 12px;
  }
`;

const bankSection = css`
  position: relative;
  z-index: 1;
  margin-bottom: 5px;
`;

const bank = css`
  &:after {
    content: '';
    display: inline-block;
    background: #e5e5e5;
    width: 1px;
    height: 10px;
    margin: 0 5px;
  }
`;

const name = css`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: rgba(52, 232, 158, 0.3);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export default PaySection;
