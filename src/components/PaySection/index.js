/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { css } from '@emotion/react';

const BRIDE_LABELS_LIST = [
  {
    name: '신부 김여규',
    bank: '토스뱅크',
    accountNumber: '1000-2013-4045',
  },
  {
    name: '이경자',
    bank: '토스뱅크',
    accountNumber: '1000-2013-4045',
  },
  {
    name: '김연복',
    bank: '토스뱅크',
    accountNumber: '1000-2013-4045',
  },
];

const GROOM_LABELS_LIST = [
  {
    name: '신랑 이성준',
    bank: '토스뱅크',
    accountNumber: '1000-8301-7120',
  },
  {
    name: '이영숙',
    bank: '토스뱅크',
    accountNumber: '1000-8301-7120',
  },
  {
    name: '이용호',
    bank: '토스뱅크',
    accountNumber: '1000-8301-7120',
  },
];

const PaySection = () => {
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        alert('계좌번호가 복사되었습니다.');
      }
    } catch (error) {
      console.error('Failed to copy to clipboard: ', error);
    }
  };

  return (
    <div css={root}>
      <div css={box}>
        <div css={sectionTitle}>신부측 계좌번호</div>
        <ul>
          {BRIDE_LABELS_LIST.map((item, index) => {
            return (
              <li css={listItem} key={index}>
                <div>
                  <div css={bankSection}>
                    <span css={bank}>{item.bank}</span>
                    <span>{item.accountNumber}</span>
                  </div>
                  <div css={name}>{item.name}</div>
                </div>
                <button
                  type="button"
                  css={copyButton}
                  onClick={() => {
                    copyToClipboard(`${item.bank} ${item.accountNumber}`);
                  }}
                >
                  <img src="/images/icon-copy.png" alt="복사하기" width={12} />
                  복사하기
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div css={box}>
        <div css={sectionTitle}>신랑측 계좌번호</div>
        <ul>
          {GROOM_LABELS_LIST.map((item, index) => {
            return (
              <li css={listItem} key={index}>
                <div>
                  <div css={bankSection}>
                    <span css={bank}>{item.bank}</span>
                    <span>{item.accountNumber}</span>
                  </div>
                  <div css={name}>{item.name}</div>
                </div>
                <button
                  type="button"
                  css={copyButton}
                  onClick={() => {
                    copyToClipboard(`${item.bank} ${item.accountNumber}`);
                  }}
                >
                  <img src="/images/icon-copy.png" alt="복사하기" width={12} />
                  복사하기
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const root = css`
  padding: 60px 24px 40px;
`;

const title = css`
  font-size: 21px;
`;

const box = css`
  padding: 16px;
  background: rgba(240, 240, 240, 0.5);
  border-radius: 16px;

  & + & {
    margin-top: 15px;
  }
`;

const sectionTitle = css`
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 700;
`;

const listItem = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  font-weight: 500;

  & + & {
    margin-top: 20px;
  }
`;

const bankSection = css`
  position: relative;
  z-index: 1;
  margin-bottom: 5px;
`;

const bank = css`
  &:after {
    content: '';
    display: inline-block;
    background: #e5e5e5;
    width: 1px;
    height: 10px;
    margin: 0 5px;
  }
`;

const name = css`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: rgba(52, 232, 158, 0.3);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const copyButton = css`
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  font-size: 11px;
  color: #333;
  cursor: pointer;

  img {
    position: relative;
    top: -1px;
    margin-right: 3px;
  }
`;

export default PaySection;
