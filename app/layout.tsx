import { ApolloWrapper } from '@/lib/Apollo/Apollo';
import './globals.css';
import StyledComponentsRegistry from '@/lib/StyledComponents/register';
import { Onest } from 'next/font/google';
import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'News list',
  description: 'Next js app with Apollo, Styled Components'
};

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
});
export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang='ru' className={onest.className}>
      <body>
        <StyledComponentsRegistry>
          <ApolloWrapper>{children}</ApolloWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
