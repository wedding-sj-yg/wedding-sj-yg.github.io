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
    </div>
  );
};

const root = css`
  padding: 70px 18px 90px;
  background: rgb(255, 245, 242);
`;

const text = css`
  font-size: 18px;
  text-align: center;
  line-height: 2em;
`;

const mainText = css`
  margin: 10px auto;
`;

export default Greetings;
