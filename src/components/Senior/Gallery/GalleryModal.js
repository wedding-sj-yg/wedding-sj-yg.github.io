/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const GalleryModal = ({ imgUrl, onClose }) => {
  return (
    <div css={root} onClick={onClose}>
      <div css={background} />
      <div css={content}>
        <img src={imgUrl} alt="이미지" width="100%" />
      </div>
    </div>
  );
};

const root = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 18px;
  box-sizing: border-box;
  z-index: 110;
`;

const background = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 102;
`;

const content = css`
  position: relative;
  z-index: 103;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GalleryModal;
