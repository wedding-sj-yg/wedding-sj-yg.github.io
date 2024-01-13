/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { copyToClipboard } from '../../../utils';

const GROOM_PAYMENTS_LABELS = [
  {
    name: '신랑 이성준',
    bank: '토스뱅크',
    accountNumber: '1000-8301-7120',
  },
  {
    name: '아버지 이용호',
    bank: '국민은행',
    accountNumber: '625102-01-212511',
  },
  {
    name: '어머니 이영숙',
    bank: '국민은행',
    accountNumber: '509001-01-186296',
  },
];

const BRIDE_PAYMENTS_LABELS = [
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

const PaymentModal = ({ payment, onClose }) => {
  const PaymentsLabels =
    payment === 'GROOM' ? GROOM_PAYMENTS_LABELS : BRIDE_PAYMENTS_LABELS;

  return (
    <>
      <div css={background} onClick={onClose} />
      <div css={root}>
        <div css={wrapper}>
          <div css={head}>
            <div>
              <strong>신랑 측 계좌번호</strong>
            </div>
            <button type="button" onClick={onClose}>
              <img src="images/icon-close.png" alt="닫기 버튼" width={20} />
            </button>
          </div>
          <div css={content}>
            {PaymentsLabels.map((item) => {
              return (
                <div key={item.name} css={listItem}>
                  <div css={itemHead}>
                    <span>{item.bank}</span>
                    <span>{item.name}</span>
                  </div>
                  <div css={itemContent}>
                    <div css={accountNumber}>{item.accountNumber}</div>
                    <button
                      type="button"
                      css={copyButton}
                      onClick={() =>
                        copyToClipboard(
                          `${item.bank} ${item.accountNumber.replace(
                            /-/g,
                            '',
                          )}`,
                          `계좌번호가 복사되었습니다.`,
                        )
                      }
                    >
                      복사하기
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const background = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 102;
`;

const root = css`
  position: fixed;
  top: 0;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  box-sizing: border-box;
  background: #fff;
  z-index: 110;
`;

const wrapper = css`
  position: relative;
  z-index: 103;
  background: #fff;
  box-sizing: border-box;
`;

const head = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 12px;
`;

const content = css`
  padding: 18px;
`;

const listItem = css`
  & + & {
    margin-top: 35px;
  }
`;

const itemHead = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const itemContent = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 10px;
`;

const accountNumber = css`
  font-weight: 700;
  flex: 1;
  border: 1px solid #eee;
  background: #f9f9f9;
  padding: 10px;
`;

const copyButton = css`
  background: rgb(255, 245, 242);
  display: inline-block;
  font-size: 13px;
`;

export default PaymentModal;
