/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const Payment = () => {
  const [payment, setPayment] = useState('');

  return (
    <div css={root}>
      <div css={titleWrapper}>
        <div css={title}>신랑 & 신부에게 마음 전하기</div>
        <p css={text}>축하의 마음을 담아 축의금을 전달해보세요.</p>
      </div>
      <div css={buttonWrapper}>
        <button
          type="button"
          css={payButton}
          onClick={() => setPayment('GROOM')}
        >
          신랑 측 계좌번호 보기
        </button>
        <button
          type="button"
          css={payButton}
          onClick={() => setPayment('BRIDE')}
        >
          신부 측 계좌번호 보기
        </button>
      </div>
      {payment && (
        <PaymentModal payment={payment} onClose={() => setPayment('')} />
      )}
    </div>
  );
};

const root = css`
  padding: 60px 18px;
`;

const titleWrapper = css`
  text-align: center;
`;

const title = css`
  font-size: 18px;
  font-weight: 600;
`;

const text = css`
  margin-top: 8px;
  font-size: 14px;
  color: #333333;
`;

const buttonWrapper = css`
  margin-top: 30px;
`;

const payButton = css`
  width: 100%;
  border-radius: 25px;
  background: #f9f9fb;
  padding: 12px 0;
  font-weight: 600;
  font-size: 14px;
  font-family: 'San Francisco';
  color: #616161;
  border: 1px solid #eeeeef;
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }
`;

export default Payment;
