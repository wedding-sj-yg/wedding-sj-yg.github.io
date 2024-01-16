/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const CONTACTS_LABELS = [
  {
    title: '신랑에게<br />연락하기',
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
    title: '신부에게<br />연락하기',
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
      <div css={box}>
        <div css={boxText}>
          <span>이용호 · 이영숙</span>의 장남 <strong>성준</strong>
        </div>
        <div css={boxText}>
          <span>김연복 · 이경자</span>의 장녀 <strong>여규</strong>
        </div>
      </div>
      <ul css={list}>
        {CONTACTS_LABELS.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <div
                  css={title}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
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

const box = css`
  margin-top: 30px;
  padding-bottom: 100px;
  text-align: center;
`;

const boxText = css`
  font-size: 15px;

  span,
  strong {
    font-size: 18px;
  }
  & + & {
    margin-top: 20px;
  }
`;

const list = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;

  li {
    text-align: center;
  }
`;

const title = css`
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
`;

const text = css`
  margin: 30px auto 15px;
  font-size: 16px;
  color: #333333;
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
  color: #333333;
`;

const parentsName = css`
  font-weight: 600;
  color: #333333;
`;

const telLink = css`
  display: inline-block;
  margin-top: 25px;
  padding: 10px;
  background: rgb(255, 245, 242);
  border-radius: 50%;
`;

export default Contacts;
