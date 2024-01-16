/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const WeddingPhoto = () => {
  return (
    <div css={[text, line]}>
      <div css={imageWrapper}>
        <img src="/images/main-image.jpeg" alt="메인 사진" width="100%" />
      </div>
      <div>
        <strong>이용호 · 이영숙</strong>의 아들 <strong>성준</strong>
      </div>
      <div>
        <strong>김연복 · 이경자</strong>의 &nbsp;&nbsp;&nbsp;딸{' '}
        <strong>여규</strong>
      </div>
    </div>
  );
};

const imageWrapper = css`
  width: 90%;
  max-width: 320px;
  margin: 0 auto 20px;
  border-radius: 15px;

  img {
    border-radius: 15px;
  }
`;

const line = css`
  border-top: 1px solid #ededec;
  padding-top: 50px;
`;

const text = css`
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
  color: #333;

  strong {
    color: #000;
  }
`;

export default WeddingPhoto;
