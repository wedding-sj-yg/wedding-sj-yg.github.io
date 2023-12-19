/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';

const MAP_BUTTON_LABELS = [
  {
    id: 'NAVER',
    title: '네이버 지도',
    iconUrl: '/images/icon-naver-marker.png',
  },
  {
    id: 'KAKAO',
    title: '카카오 내비',
    iconUrl: '/images/icon-kakao-marker.png',
  },
  {
    id: 'TMAP',
    title: '티맵',
    iconUrl: '/images/icon-tmap-marker.png',
  },
];

const InformationSection = () => {
  const handleClickMapButton = (id) => {
    switch (id) {
      case 'NAVER': {
        window.open(
          'https://map.naver.com/p/entry/place/1929913788?c=15.00,0,0,0,dh',
          '_blank',
        );
        break;
      }
      case 'KAKAO': {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

        window.Kakao.Navi.start({
          name: '아펠가모 공덕',
          x: 126.9513333,
          y: 37.5428592,
          coordType: 'wgs84',
        });
        break;
      }
      case 'TMAP': {
        location.href = 'tmap://search?name=아펠가모공덕';
        break;
      }
      default: {
        break;
      }
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
      <div css={[line]}>
        <div css={sectionTitle}>
          <span>오시는 길</span>
        </div>
        <div
          css={[
            text,
            css`
              margin-bottom: 50px;
            `,
          ]}
        >
          <strong css={semiBold}>
            2024년 3월 9일 토요일 오후 2시
            <br />
            아펠가모 공덕 라로브홀
          </strong>
          <div css={address}>
            서울특별시 마포구 마포대로92
            <br />
            효성해링턴스퀘어 B동 7층
          </div>
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
                  <div css={buttonIconWrapper}>
                    <img src={item.iconUrl} alt={item.title} css={buttonIcon} />
                  </div>
                  <div css={iconTitle}>{item.title}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div
          css={css`
            margin-top: 50px;
          `}
        >
          <ul css={list}>
            <li css={listItem}>
              <div css={title}>
                <strong>지하철</strong>
              </div>
              <div css={content}>
                공덕역 7번 출구 방향으로 나와 우측 골목 직진
              </div>
            </li>
            <li css={listItem}>
              <div css={title}>
                <strong>주차</strong>
              </div>
              <div css={content}>
                효성해링턴스퀘어 본 건물 주차 (2시간 무료)
              </div>
            </li>
            <li css={listItem}>
              <div css={title}>
                <strong>안내</strong>
              </div>
              <div>
                <div css={content}>
                  예식 당일 주차 혼잡이 예상되오니, 가급적 대중교통 이용을 권장
                  드립니다.
                </div>
                <div css={content}>
                  화환은 정중히 사양합니다. 좋은 마음만 감사히 받겠습니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const section = css`
  padding: 0 24px;
`;

const line = css`
  padding-top: 50px;
`;

const sectionTitle = css`
  position: relative;
  margin-bottom: 30px;
  text-align: center;

  span {
    position: relative;
    display: inline-block;
    font-size: 24px;
    font-weight: 700;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
      background: rgba(52, 232, 158, 0.5);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
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

const semiBold = css`
  font-weight: 600;
`;

const address = css`
  margin-top: 16px;
  font-size: 15px;
  color: #333;
`;

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const listItem = css`
  & + & {
    margin-top: 20px;
  }
`;

const title = css`
  position: relative;
  margin-bottom: 4px;
  padding-left: 8px;
  font-size: 15px;

  &:before {
    content: '·';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const content = css`
  position: relative;
  padding-left: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  word-break: keep-all;

  & + & {
    margin-top: 5px;
  }
`;

const buttonsWrapper = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const buttonStyle = css`
  width: 60px;
  border: 0;
  outline: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`;

const buttonIconWrapper = css`
  background: #f5f5f5;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonIcon = css`
  position: relative;
  width: 15px;
`;

const iconTitle = css`
  margin-top: 5px;
  font-size: 12px;
  color: #333;
  text-align: center;
`;

const naverMap = css`
  width: 100%;
  height: 200px;
`;

export default InformationSection;
