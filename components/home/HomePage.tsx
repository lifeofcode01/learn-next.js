import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

export default function HomePage() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"static"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                // position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              {"Let's learn"}
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Next.js
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            These are the Tech Stack we will learn along:
          </Text>
          <Wrap>
            {/* <Stack direction={{ base: "column", md: "row" }} spacing={4}> */}
            {/* <Button rounded={"full"}>How It Works</Button> */}
            {techStackButton("Next.js with Typescript")}
            {techStackButton("Mobx for StateManagement")}
            {techStackButton("Chakra Ui")}
            {techStackButton("MongoDB")}
            {/* <Button rounded={"full"}>Mobx State Management</Button> */}
            {/* <Button rounded={"full"}>How It Works</Button>
            <Button rounded={"full"}>How It Works</Button>
            <Button rounded={"full"}>How It Works</Button> */}
            {/* </Stack> */}
          </Wrap>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"fill"}
          // src={
          //   "https://learnpracticeandshare.com/wp-content/uploads/2020/12/Awesome-Next-JavaScript-Resources-List.jpg"
          // }
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Flex>
    </Stack>
  );

  function techStackButton(text: string) {
    return (
      <WrapItem>
        <Button
          rounded={"base"}
          position="static"
          // bg={"grey.400"}
          // color={"white"}
          // _hover={{
          //   bg: "blue.500",
          // }}
        >
          {text}
        </Button>
      </WrapItem>
    );
  }
}
