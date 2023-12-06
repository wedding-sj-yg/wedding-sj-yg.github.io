/** @jsxImportSource @emotion/react */
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/**
 * base.ts
 *
 * normalize.css를 그대로 변형한 파일로 이 파일은 기본적으로 수정해선 안됩니다.
 * 확장이 필요한 경우는 extend.ts에 작성하세요.
 *
 */

import { css } from '@emotion/react';

const normalize = css`
  /**
   * 1. 모든 브라우저에서 줄 높이를 수정합니다.
   * 2. iOS에서 포트레이트 변경후 글꼴 크기 조정을 방지합니다.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* 섹션단위 요소들
   ========================================================================== */

  /**
   * 모든 브라우저에서 마진을 제거합니다.
   */

  body {
    margin: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'San Francisco';
  }

  /**
   * IE에서 main 요소를 일관되게 렌더링 합니다.
   */

  main {
    display: block;
  }

  /**
   * 크롬, 파이어폭스 및 사파리에서 section 및 article 컨텍스트 내의 h1 요소의 글꼴 크기 및 여백을 일관되게 합니다.
   */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* 그룹핑 컨텐트
   ========================================================================== */

  /**
   * 1. box-sizing 값이 다른 파이어폭스를 일관되게 합니다.
   * 2. 엣지 및 IE에서 overflow를 표시합니다.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. 모든 브라우저에서 글꼴 크기의 상속 및 크기 조정을 수정합니다.
   * 2. 모든 브라우저에서 이상한 "em"글꼴 크기를 수정합니다.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* 텍스트 수준 의미론
   ========================================================================== */

  /**
   * IE 10에서 활성 링크의 회색 배경을 제거합니다.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. 크롬 Chrome 57이상 버전의 bottom border를 제거합니다.
   * 2. 크롬, 엣지, IE, 오페라 및 사파리에서 올바른 text-decoration을 추가합니다.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * 크롬, 엣지 및 사파리에서 올바른 font-weight를 설정합니다.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. 모든 브라우저에서 글꼴 크기의 상속 및 크기 조정을 수정합니다.
   * 2. 모든 브라우저에서 이상한 "em"글꼴 크기를 수정합니다.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * 모든 브라우저에서 동일한 font-size로 수정합니다.
   */

  small {
    font-size: 80%;
  }

  /**
   * sub및 sup 요소가 line-height에 영향을 미치지 않도록 수정합니다.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* 포함되는 컨텐츠
   ========================================================================== */

  /**
   * IE10 에서 링크 내부 이미지의 테두리를 제거합니다.
   */

  img {
    border-style: none;
  }

  /* Forms
   ========================================================================== */

  /**
   * 1. 모든 브라우저에서 글꼴 스타일을 변경합니다.
   * 2. 파이어폭스 및 사파리에서 여백을 제거합니다.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * IE 및 엣지에서 overflow가 보이도록 합니다.
   */

  button,
  input {
    overflow: visible;
  }

  /**
   * 엣지, 파이어폭스 및 IE에서 텍스트 변환 상속을 제거합니다.
   */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
   * iOS 및 사파리에서 클릭 가능한 유형의 스타일을 지정할 수 없는 문제를 수정합니다.
   */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
   * 파이어폭스에서 내부 테두리와 패딩을 제거합니다.
   */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * 이전 규칙에 의해 설정되지 않은 포커스 스타일을 복원합니다.
   */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * 파이어폭스에서 패딩값을 올바르게 수정합니다.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. 엣지 및 IE에서 텍스트 줄바꿈을 수정합니다.
   * 2. IE의 "fieldset"요소의 색상 상속을 수정합니다.
   * 3. 개발자가 제로아웃할 때 잡히지 않도록 패딩을 제거합니다.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * 크롬, 파이어폭스 및 오페라에서 올바른 수직 정렬을 추가합니다.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * IE 10 이상의 기본 스크롤바를 제거합니다.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. IE 10에서 올바른 상자 크기를 추가합니다.
   * 2. IE 10에서 패딩을 제거합니다.
   */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * 크롬에서 증가 및 감소 버튼 커서 스타일을 수정합니다.
   */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. 크롬, 사파리에서 이상하게 보이는 현상을 수정합니다.
   * 2. 사파리에서 윤곽선 스타일을 수정합니다.
   */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * macOS의 크롬 및 사파리에서 내부 패딩을 제거합니다.
   */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. iOS 및 사파리에서 클릭 가능한 유형의 스타일을 지정할 수 없는 문제를 수정합니다.
   * 2. 사파리에서 글꼴 속성을 "상속"으로 변경합니다.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* 인터렉티브
   ========================================================================== */

  /*
   * 엣지, IE 10+ 및 파이어폭스에서 올바른 display 값을 추가합니다.
   */

  details {
    display: block;
  }

  /*
   * 모든 브라우저에서 올바른 display 값을 추가합니다.
   */

  summary {
    display: list-item;
  }

  /* Misc
   ========================================================================== */

  /**
   * IE 10+ 에서 올바른 display값을 추가합니다.
   */

  template {
    display: none;
  }

  /**
   * IE 10+ 에서 올바른 display값을 추가합니다.
   */

  [hidden] {
    display: none;
  }
`;

export default normalize;
