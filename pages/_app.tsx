import "../shared/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "@components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* <Component {...pageProps} />;  */}
        {/* Beware of the semicolon at the end of Component in the above line */}
        {/* Because of that semicolon all ui had semicolon at the end. */}

        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
