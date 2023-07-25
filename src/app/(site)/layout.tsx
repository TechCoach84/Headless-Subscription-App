'use client';

import "../../styles/globals.css";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer";
import FooterLegalSection from "@/components/organisms/footerLegalSection";
import FooterPopularSearches from "@/components/organisms/footerPopularSearches";
import {
  getFooterLegalMessage,
  getFooterLinks,
  getFooterPopularSearches,
  getProducts,
} from "../AllData";
import React from "react";
import { FooterLinksProps, FooterPopularSearchesProps } from "#/globalTypes";
import apolloClient from "../../lib/ApolloClient";
import { ApolloProvider } from "@apollo/client";

interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout(props: LayoutProps) {
  const { children } = props;
  const { categoryLinkArray } = getProducts();
  const footerLinks: FooterLinksProps[] = getFooterLinks();
  const footerPopularSearches: FooterPopularSearchesProps[] =
    getFooterPopularSearches();
  const footerLegalMessage: string = getFooterLegalMessage();

  return (
    <ApolloProvider client={apolloClient}>
      <html>
        <body>
          <header className={"sticky top-0 right-0 left-0"}>
            <Header products={categoryLinkArray} />
          </header>
          <main className={"w-full flex flex-col mb-2"}>{children}</main>
          <footer>
            <Footer footerLinks={footerLinks} />
            <FooterPopularSearches
              footerPopularSearches={footerPopularSearches}
            />
            <FooterLegalSection copyrightMessage={footerLegalMessage} />
          </footer>
        </body>
      </html>
    </ApolloProvider>
  );
}
