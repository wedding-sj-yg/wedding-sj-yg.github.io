/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  MainCard,
  Greetings,
  Contacts,
  Gallery,
  Location,
  Payment,
  Footer,
} from '../../components/Senior';

function Senior() {
  return (
    <div css={root}>
      <div css={card}>
        <MainCard />
      </div>
      <div css={card}>
        <Greetings />
      </div>
      <div css={card}>
        <Contacts />
      </div>
      <div css={card}>
        <Gallery />
      </div>
      <div css={card}>
        <Location />
      </div>
      <div css={card}>
        <Payment />
      </div>
      <div css={card}>
        <Footer />
      </div>
    </div>
  );
}

const root = css`
  padding: 18px;
  font-family: 'Nanum Myeongjo';
  font-weight: 400;
`;

const card = css`
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 15px 25px,
    rgba(0, 0, 0, 0.1) 0px 5px 10px;

  & + & {
    margin-top: 20px;
  }
`;

export default Senior;
