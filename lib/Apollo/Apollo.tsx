'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';

const url = process.env.MAIN_API;

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: url
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink
  });
};

export function ApolloWrapper({ children }: PropsWithChildren<{}>) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
