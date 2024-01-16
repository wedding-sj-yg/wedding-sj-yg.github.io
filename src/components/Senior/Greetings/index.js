/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const Greetings = () => {
  return (
    <div css={root}>
      <div css={text}>
        <img
          src="images/senior/icon-wedding-ring.png"
          alt="웨딩밴드 이미지"
          width={32}
        />
        <br />
        배우자가 되겠습니다.
        <div css={mainText}>
          아내에게 배우자는 마음과
          <br />
          남편에게 배우자는 자세와
          <br />
          서로에게 배우자는 의지로
          <br />
          한평생 서로에게
          <br />
          가장 좋은 배우자가 되겠습니다.
        </div>
        저희 배움을 응원해주세요.
      </div>
      <div css={box}>
        <div css={boxText}>
          <span>이용호 · 이영숙</span>의 장남 <strong>성준</strong>
        </div>
        <div css={boxText}>
          <span>김연복 · 이경자</span>의 장녀 <strong>여규</strong>
        </div>
      </div>
    </div>
  );
};

const root = css`
  padding: 50px 18px 70px;
  background: rgb(255, 245, 242);
`;

const text = css`
  text-align: center;
  line-height: 2em;
`;

const box = css`
  text-align: center;
  margin-top: 40px;
`;

const boxText = css`
  font-size: 13px;

  span,
  strong {
    font-size: 16px;
  }
  & + & {
    margin-top: 12px;
  }
`;

const mainText = css`
  margin: 10px auto;
`;

export default Greetings;
