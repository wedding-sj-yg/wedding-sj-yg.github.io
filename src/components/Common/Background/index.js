/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

const Background = ({ onClose }) => {
  return (
    <BackgroundPortal>
      <div css={background} onClick={onClose} />
    </BackgroundPortal>
  );
};

const BackgroundPortal = ({ children }) => {
  const element = document.getElementById('background');

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

export default Background;
