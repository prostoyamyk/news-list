'use client';

import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Article, { ArticleData } from '@/components/Article';
import { StyledArticleList } from '@/components/StyledComponents';

const query = gql`
  query ($skip: Int) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: $skip
      take: 10
    ) {
      id
      url
      title {
        short
      }
      dates {
        posted(lang: "ru", getDiff: true)
      }
      description {
        intro
      }
      thumbnail
      cparent {
        id
        url {
          ru
        }
      }
      parents {
        id
        type
        attachment
      }
    }
  }
`;

const ArticleList = () => {
  const { data, fetchMore } = useSuspenseQuery<{ contents: ArticleData[] }>(query, {
    variables: { page: 1 }
  });

  const getNextPage = () =>
    fetchMore({
      variables: { skip: data.contents.length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEntries = fetchMoreResult.contents;
        return { contents: [...previousResult.contents, ...newEntries] };
      }
    });

  return (
    <StyledArticleList>
      <h1>Сегодня</h1>
      <InfiniteScroll
        dataLength={data.contents.length}
        next={getNextPage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {data.contents.map((article: ArticleData) => (
          <Article articleData={article} key={article.id} />
        ))}
      </InfiniteScroll>
    </StyledArticleList>
  );
};

export default ArticleList;
