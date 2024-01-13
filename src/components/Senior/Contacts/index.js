/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const CONTACTS_LABELS = [
  {
    title: '신랑에게 연락하기',
    phoneNumber: '01049254483',
    text: '신랑 측 혼주',
    parents: [
      {
        title: '아버지',
        name: '이용호',
        phoneNumber: '01053431301',
      },
      {
        title: '어머니',
        name: '이영숙',
        phoneNumber: '01037901301',
      },
    ],
  },
  {
    title: '신부에게 연락하기',
    phoneNumber: '01091956525',
    text: '신부 측 혼주',
    parents: [
      {
        title: '아버지',
        name: '김연복',
        phoneNumber: '01087613523',
      },
      {
        title: '어머니',
        name: '이경자',
        phoneNumber: '01087386525',
      },
    ],
  },
];

const Contacts = () => {
  return (
    <div css={root}>
      <ul css={list}>
        {CONTACTS_LABELS.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <div css={title}>{item.title}</div>
                <a href={`tel:${item.phoneNumber}`} css={telLink}>
                  <img
                    src="images/icon-telephone.png"
                    alt="전화기 아이콘"
                    width={26}
                  />
                </a>
              </div>
              <div css={text}>{item.text}</div>
              <div>
                {item.parents.map((parent) => {
                  return (
                    <div css={boxItem} key={parent.title}>
                      <div>
                        <span css={parents}>{parent.title}</span>
                        <span css={parentsName}>{parent.name}</span>
                      </div>
                      <a href={`tel:${parent.phoneNumber}`} css={telLink}>
                        <img
                          src="images/icon-telephone.png"
                          alt="전화기 아이콘"
                          width={22}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const root = css`
  padding: 50px 18px;
`;

const list = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  li {
    text-align: center;
  }
`;

const title = css`
  margin-bottom: 10px;
  font-size: 18px;
`;

const text = css`
  margin: 30px auto 25px;
  font-size: 16px;
  color: rgb(51, 51, 51);
`;

const boxItem = css`
  & + & {
    margin-top: 20px;
  }
`;

const parents = css`
  display: inline-block;
  margin-right: 5px;
  font-size: 12px;
`;

const parentsName = css`
  font-weight: 600;
`;

const telLink = css`
  display: inline-block;
  margin-top: 10px;
  padding: 10px;
  background: rgb(255, 245, 242);
  border-radius: 50%;
`;

export default Contacts;
