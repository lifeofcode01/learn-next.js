import "../shared/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
