/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { copyToClipboard } from '../../../utils';

const BRIDE_LABELS_LIST = [
  {
    name: '신부 김여규',
    bank: '토스뱅크',
    accountNumber: '1000-2013-4045',
  },
  {
    name: '신부 어머니 이경자',
    bank: '국민은행',
    accountNumber: '045-21-0762545',
  },
  {
    name: '신부 아버지 김연복',
    bank: '제일은행',
    accountNumber: '440-20-101282',
  },
];

const GROOM_LABELS_LIST = [
  {
    name: '신랑 이성준',
    bank: '토스뱅크',
    accountNumber: '1000-8301-7120',
  },
  {
    name: '신랑 어머니 이영숙',
    bank: '국민은행',
    accountNumber: '509001-01-186296',
  },
  {
    name: '신랑 아버지 이용호',
    bank: '국민은행',
    accountNumber: '625102-01-212511',
  },
];

const Payments = () => {
  return (
    <div css={root}>
      <div css={sectionTitle}>
        <span>마음 전하는 곳</span>
      </div>
      <div css={box}>
        <div css={title}>신랑측 계좌번호</div>
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
                    copyToClipboard(
                      `${item.bank} ${item.accountNumber.replace(/-/g, '')}`,
                      '계좌번호가 복사되었습니다.',
                    );
                  }}
                >
                  <img src="/images/icon-copy.png" alt="복사하기" width={16} />
                  복사하기
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div css={box}>
        <div css={title}>신부측 계좌번호</div>
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
                    copyToClipboard(
                      `${item.bank} ${item.accountNumber.replace(/-/g, '')}`,
                      '계좌번호가 복사되었습니다.',
                    );
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
  padding: 0 24px 50px;
  margin-top: 50px;
`;

const sectionTitle = css`
  position: relative;
  margin-bottom: 30px;
  text-align: center;
  padding-top: 50px;
  border-top: 1px solid #ededec;

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

const box = css`
  padding: 24px 16px;
  background: rgba(240, 240, 240, 0.5);
  border-radius: 16px;

  & + & {
    margin-top: 15px;
  }
`;

const title = css`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
`;

const listItem = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;

  & + & {
    margin-top: 25px;
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
  font-weight: 700;

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
  font-size: 13px;
  color: #333;
  cursor: pointer;

  img {
    position: relative;
    top: -1px;
    margin-right: 3px;
  }
`;

export default Payments;
