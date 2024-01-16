/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { copyToClipboard } from '../../../utils';

const Footer = () => {
  const handleClickShareKakaoTalk = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '이성준, 김여규의 결혼식에 초대합니다.',
        description: '2024년 3월 9일 오후 2시 아펠가모 공덕 라로브홀',
        imageUrl: '/images/og-image.jpeg',
        link: {
          mobileWebUrl: 'https://wedding-sj-yg.github.io/#/senior',
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보러가기',
          link: {
            mobileWebUrl: 'https://wedding-sj-yg.github.io/#/senior',
          },
        },
      ],
    });
  };

  return (
    <div css={root}>
      <ul css={list}>
        <li>
          <button type="button" onClick={handleClickShareKakaoTalk}>
            <div>
              <img
                src="/images/senior/icon-kakaotalk.png"
                alt="카카오톡 아이콘"
                width={40}
              />
            </div>
            <div css={buttonText}>
              카카오톡
              <br />
              공유하기
            </div>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() =>
              copyToClipboard(
                'https://wedding-sj-yg.github.io/senior',
                '청첩장 주소가 복사되었습니다.',
              )
            }
          >
            <div css={imageWrapper}>
              <img src="/images/icon-link.png" alt="링크 아이콘" width={20} />
            </div>
            <div css={buttonText}>
              청첩장 주소
              <br />
              복사하기
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

const root = css`
  padding: 40px 18px;
`;

const list = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const imageWrapper = css`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background: rgba(240, 240, 240, 0.5);

  img {
    display: block;
  }
`;

const buttonText = css`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'San Francisco';
  color: #666666;
  line-height: 1.5;
`;

export default Footer;
