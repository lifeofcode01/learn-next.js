import { useColorModeValue, chakra, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import usersStore, { IUserModel } from "../controller/usersStore";
import { observer } from "mobx-react-lite";

function UserCard({ user }: { user: IUserModel }) {
  return (
    <div>
      <Flex
        key={user.id}
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={2}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="xs"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          {/* <Image
          w="full"
          h={56}
          fit="cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        /> */}

          <Box py={5} textAlign="center">
            {/* <Link
                href="/users/user"
                // display="block"
                // fontSize="2xl"
                // color={useColorModeValue("gray.800", "white")}
                // fontWeight="bold"
              >
                {user.id}
              </Link> */}
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Link href={"/users/" + user.id} key={user.id} passHref>
                {user.name}
              </Link>
            </chakra.span>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

// export default observer(UserCard);
export default UserCard;
