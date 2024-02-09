'use client';

import styled from 'styled-components';

export const StyledArticle = styled.div`
  margin-bottom: 24px;

  & .article__content {
    display: flex;
    flex: 1 0;
    gap: 16px;
  }

  & .article__img {
    position: relative;
    width: 240px;
    height: auto;
    object-fit: contain;
    overflow: hidden;
    aspect-ratio: 16/9;
    border-radius: 4px;

    @media (max-width: 480px) {
      width: 144px;
    }
  }

  & .article__body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  & .article__title {
    margin: -2.5px 0 8px;
  }

  & .article__title h3 {
    font-size: 24px;
    line-height: 26px;
    position: relative;
    color: rgb(15, 23, 42);
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
    }
  }

  & .article__title h3:hover {
    color: rgb(255, 71, 0);
  }

  & .article__description {
    margin: 0 0 10px;

    @media (max-width: 850px) {
      display: none;
    }
  }

  & .article__description p {
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(15, 23, 42);
  }

  & .article__date {
    display: flex;
    gap: 8px;
    position: relative;
    align-items: center;
  }

  & .article__date img {
  }

  & .article__date time {
    font-size: 14px;
    color: rgb(128, 128, 128);
    line-height: 0;
    width: max-content;
  }
`;

export const StyledArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);

  & h1 {
    color: rgb(15, 23, 42);
    font-weight: 700;
    font-size: 28px;

    @media (max-width: 850px) {
      font-size: 24px;
    }
  }
`;
