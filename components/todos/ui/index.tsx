import { Box } from "@chakra-ui/react";
import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoIndex = () => {
  return (
    <Box maxWidth="8xl" margin="auto" p={5}>
      <TodoList />
      <TodoAdd />
    </Box>
  );
};

export default TodoIndex;
