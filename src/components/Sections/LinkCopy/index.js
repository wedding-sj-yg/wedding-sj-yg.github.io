/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { copyToClipboard } from '../../../utils';

const LinkCopy = () => {
  return (
    <div css={root}>
      <div css={content}>
        <button
          type="button"
          onClick={() =>
            copyToClipboard(
              'https://wedding-sj-yg.github.io/',
              '청첩장 주소가 복사되었습니다.',
            )
          }
        >
          <span css={iconLink}>
            <img
              src="/images/icon-link.png"
              alt="링크 주소 복사하기"
              width={14}
            />
          </span>
          <span css={buttonText}>링크 주소 복사하기</span>
        </button>
      </div>
    </div>
  );
};

const root = css`
  padding: 0 24px 50px;
`;

const content = css`
  text-align: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    background: #2cbf89;
    color: #333;
    border-radius: 12px;
    padding: 12px 20px;
  }
`;

const iconLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1px;
`;

const buttonText = css`
  display: inline-block;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export default LinkCopy;
