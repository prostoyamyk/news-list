import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { StyledArticle, StyledSourceLogo } from '@/components/StyledComponents';
import Link from 'next/link';

const MEDIA_URL = 'https://i.simpalsmedia.com/point.md/news/370x194';
const MEDIA_LOGO_URL = 'https://i.simpalsmedia.com/point.md/logo';

const Article = ({ articleData }: { articleData: ArticleData }) => {
  const sourceLogo: string | StaticImageData | undefined = articleData.parents.find(
    (parent: ArticleParents) => parent.type === 'source'
  )?.attachment;

  return (
    <StyledArticle className={'article'}>
      <div className='article__content'>
        <Link href={`/novosti/${articleData.cparent.url.ru}/${articleData.url}`}>
          <div className='article__img'>
            <Image
              fill={true}
              src={`${MEDIA_URL}/${articleData.thumbnail}`}
              alt={articleData.title.short}
            />
          </div>
        </Link>

        <div className='article__body'>
          <div className='article__title'>
            <Link href={'/'}>
              <h3>{articleData.title.short}</h3>
            </Link>
          </div>
          <div className='article__description'>
            <p>{articleData.description.intro}</p>
          </div>
          <div className='article__date'>
            {sourceLogo ? (
              <Image
                width={16}
                height={16}
                src={`${MEDIA_LOGO_URL}/${sourceLogo}`}
                alt='calendar'
              />
            ) : (
              <StyledSourceLogo />
            )}
            <time>{articleData.dates.posted}</time>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;

type ArticleParents = {
  id: string;
  type: string;
  attachment: string;
};

export type ArticleData = {
  id: string;
  url: string;
  title: {
    short: string;
  };
  dates: {
    posted: string;
  };
  description: {
    intro: string;
  };
  cparent: {
    id: string;
    url: {
      ru: string;
    };
  };
  thumbnail: string | StaticImageData;
  parents: ArticleParents[];
};
