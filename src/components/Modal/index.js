/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose }) => {
  return (
    <ModalPortal>
      <div css={background}>
        <div css={modal}>
          <div css={content}>
            <button type="button" css={closeButton} onClick={onClose}>
              <img src="/images/icon-close.png" alt="닫기" width={20} />
            </button>
            <h3 css={title}>
              <span css={highlighted}>
                <span css={zIndex}>꾹 눌러</span>
              </span>{' '}
              우리 이야기 둘러보기
            </h3>
            <p css={text}>신랑, 신부가 궁금하다면 아이콘을 눌러주세요</p>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

const ModalPortal = ({ children }) => {
  const element = document.getElementById('modal');

  return createPortal(children, element);
};

const background = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #2c2c2ccc;
  }
`;

const modal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const content = css`
  position: relative;
  width: 310px;
  height: 200px;
  border-radius: 15px;
  padding: 18px;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
`;

const closeButton = css`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const title = css`
  margin-bottom: 10px;
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

export default Modal;
