/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import GalleryModal from './GalleryModal';

const IMAGE_LABELS = [
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
  {
    imgUrl: '/images/senior/main-image.jpeg',
  },
];

const Gallery = () => {
  const [imgUrl, setImgUrl] = useState('');

  return (
    <div css={root}>
      <div css={title}>GALLERY</div>
      <div>
        <ul css={list}>
          {IMAGE_LABELS.map((item, index) => {
            return (
              <li key={index}>
                <div
                  css={[
                    css`
                      cursor: pointer;
                      width: 100%;
                      height: 0;
                      padding-bottom: 100%;
                      background-image: url(${item.imgUrl});
                      background-size: cover;
                    `,
                  ]}
                  onClick={() => setImgUrl(item.imgUrl)}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {imgUrl && <GalleryModal imgUrl={imgUrl} onClose={() => setImgUrl('')} />}
    </div>
  );
};

const root = css`
  padding: 60px 18px;
`;

const title = css`
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.3em;
  line-height: 1.4em;
  color: rgb(51, 51, 51);
`;

const list = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export default Gallery;
