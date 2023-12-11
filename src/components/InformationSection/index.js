/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { css } from '@emotion/react';

const MAP_BUTTON_LABELS = [
  {
    id: 'NAVER',
    title: '네이버 지도',
    iconUrl: '/images/icon-navermap.png',
  },
  {
    id: 'KAKAO',
    title: '카카오 내비',
    iconUrl: '/images/icon-kakaonavi.png',
  },
  {
    id: 'TMAP',
    title: '티맵',
    iconUrl: '/images/icon-tmap.png',
  },
];

const InformationSection = () => {
  const handleClickMapButton = (id) => {
    if (id === 'NAVER') {
      window.open(
        'https://map.naver.com/p/entry/place/1929913788?c=15.00,0,0,0,dh',
        '_blank',
      );
    } else if (id === 'KAKAO') {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

      window.Kakao.Navi.start({
        name: '아펠가모 공덕',
        x: 126.9513333,
        y: 37.5428592,
        coordType: 'wgs84',
      });
    } else {
      location.href = 'tmap://search?name=아펠가모공덕';
    }
  };

  useEffect(() => {
    const latLng = new window.naver.maps.LatLng(37.5428592, 126.9513333);

    const map = new window.naver.maps.Map('map', {
      center: latLng,
      zoom: 16,
    });

    new window.naver.maps.Marker({
      position: latLng,
      map,
    });
  }, []);

  return (
    <section css={section}>
      <div css={text}>
        <div>
          <strong>김연복 · 이경자</strong>의 &nbsp;&nbsp;&nbsp;딸{' '}
          <strong>여규</strong>
        </div>
        <div>
          <strong>이용호 · 이영숙</strong>의 아들 <strong>성준</strong>
        </div>
      </div>
      <div css={information}>
        <div css={[text, date]}>
          <strong css={semiBold}>
            2024년 3월 9일 토요일 오후 2시
            <br />
            아펠가모 공덕 라로브홀
          </strong>
        </div>
        <div>
          <div id="map" css={naverMap} />
          <div css={buttonsWrapper}>
            {MAP_BUTTON_LABELS.map((item) => {
              return (
                <button
                  type="button"
                  key={item.id}
                  css={buttonStyle}
                  onClick={() => handleClickMapButton(item.id)}
                >
                  <img src={item.iconUrl} alt={item.title} css={buttonIcon} />
                  <span css={iconTitle}>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div css={place}>
          <ul css={list}>
            <li css={listItem}>
              <div css={title}>
                <strong>주소</strong>
              </div>
              <div>서울특별시 마포구 마포대로92 효성해링턴스퀘어 B동 7층</div>
            </li>
            <li css={listItem}>
              <div css={title}>
                <strong>지하철</strong>
              </div>
              <div>공덕역 7번 출구 방향으로 나와 우측 골목 직진</div>
            </li>
            <li css={listItem}>
              <div css={title}>
                <strong>주차</strong>
              </div>
              <div>효성해링턴스퀘어 본 건물 주차 (2시간 무료)</div>
            </li>
            <li css={listItem}>
              <div css={title}>
                <strong>안내</strong>
              </div>
              <div>
                예식 당일 주차 혼잡이 예상되오니, 가급적 대중교통 이용을 권장
                드립니다.
                <br />
                화환은 정중히 사양합니다. 좋은 마음만 감사히 받겠습니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const section = css`
  padding: 24px;
`;

const text = css`
  font-size: 1.5em;
  text-align: center;
  line-height: 1.5;
`;

const information = css`
  margin-top: 60px;
`;

const semiBold = css`
  font-weight: 600;
`;

const date = css`
  margin-bottom: 30px;
`;

const place = css`
  margin-top: 30px;
`;

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const listItem = css`
  & + & {
    margin-top: 15px;
  }
`;

const title = css`
  margin-bottom: 4px;
`;

const buttonsWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const buttonStyle = css`
  border: 0;
  outline: 0;
  flex: 1;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 13px 0;
  position: relative;
  & + & {
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 0;
      width: 1px;
      height: 50%;
      background: #333;
      opacity: 0.3;
    }
  }
`;

const buttonIcon = css`
  position: relative;
  top: -1px;
  width: 16px;
`;

const iconTitle = css`
  display: inline-block;
`;

const naverMap = css`
  width: 100%;
  height: 200px;
`;

export default InformationSection;
