/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';

const Location = () => {
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
    <div css={root}>
      <div css={title}>LOCATION</div>
      <div css={box}>
        <div css={location}>아펠가모 공덕 라로브홀</div>
        <div css={address}>
          서울특별시 마포구 마포대로92
          <br />
          효성해링턴스퀘어 B동 7층
        </div>
        <div css={tel}>02-2197-0230</div>
      </div>
      <div>
        <div id="map" css={naverMap} />
      </div>
      <div css={trafficWrapper}>
        <ul>
          <li css={traffic}>
            <div css={trafficTitle}>지하철 안내</div>
            <div css={trafficText}>
              <span css={dotted}>
                공덕역 7번 출구 방향으로 나와 우측 골목 직진
              </span>
            </div>
          </li>
          <li css={traffic}>
            <div css={trafficTitle}>주차</div>
            <div css={trafficText}>
              <span css={dotted}>
                효성해링턴스퀘어 본 건물 주차 (2시간 무료)
              </span>
            </div>
          </li>
          <li css={traffic}>
            <div css={trafficTitle}>안내</div>
            <div css={trafficText}>
              <span css={dotted}>
                예식 당일 주차 혼잡이 예상되오니, 가급적 대중교통 이용을 권장
                드립니다.
              </span>
              <span css={dotted}>
                화환은 정중히 사양합니다.
                <br />
                좋은 마음만 감사히 받겠습니다.
              </span>
            </div>
          </li>
        </ul>
      </div>
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

const box = css`
  text-align: center;
`;

const location = css`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const address = css`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
`;

const tel = css`
  font-size: 14px;
  line-height: 1.5;
`;

const naverMap = css`
  width: 100%;
  height: 200px;
  margin-top: 30px;
`;

const trafficWrapper = css`
  margin-top: 30px;
`;

const traffic = css`
  & + & {
    margin-top: 23px;
  }
`;

const trafficTitle = css`
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 600;
`;

const trafficText = css`
  font-size: 14px;
  word-break: keep-all;
  line-height: 1.5;
  color: #333333;
`;

const dotted = css`
  position: relative;
  padding-left: 8px;
  display: inline-block;

  &:before {
    content: '·';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  & + & {
    margin-top: 10px;
  }
`;

export default Location;
