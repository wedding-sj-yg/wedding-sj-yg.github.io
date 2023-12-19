/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PhotoSection = () => {
  return (
    <div css={[text, line]}>
      <div>
        <strong>김연복 · 이경자</strong>의 &nbsp;&nbsp;&nbsp;딸{' '}
        <strong>여규</strong>
      </div>
      <div>
        <strong>이용호 · 이영숙</strong>의 아들 <strong>성준</strong>
      </div>
    </div>
  );
};

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

export default PhotoSection;
