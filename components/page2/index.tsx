import { Button } from "@chakra-ui/react";
import React from "react";
import picsStore from "./controller/PicsStore";
import ProductAddToCart from "./ProductAddToCart";

const Page2Index = () => {
  return (
    <>
      <ProductAddToCart />
      <Button onClick={() => picsStore.fetchPicsFromUnsplash()}>
        Load Pics from Unsplash
      </Button>
    </>
  );
};

export default Page2Index;
