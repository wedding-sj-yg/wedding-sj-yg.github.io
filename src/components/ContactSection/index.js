/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const CONTACT_LABELS = [
  {
    name: '신랑',
    tel: '01049254483',
  },
  {
    name: '신부',
    tel: '01091956525',
  },
];

const ContactSection = () => {
  return (
    <div css={root}>
      <div css={contents}>
        <ul>
          {CONTACT_LABELS.map((item) => {
            return (
              <li css={listItem} key={item.name}>
                <div>{item.name}에게 연락하기</div>
                <a href={`tel:${item.tel}`} css={[phoneButton, groom]}>
                  <img
                    src="/images/icon-telephone.png"
                    alt="연락하기"
                    width={20}
                  />
                </a>
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
  background: rgba(220, 242, 222, 0.5);
`;

const contents = css`
  padding-top: 50px;
`;

const listItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  & + & {
    margin-top: 10px;
  }
`;

const phoneButton = css`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const groom = css`
  background: #fff;
`;

const highlighted = css`
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: rgba(52, 232, 158, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default ContactSection;
