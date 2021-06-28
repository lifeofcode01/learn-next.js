import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import todoStore, { ITodoModel } from "../controller/todoStore";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

// interface ITodoIndexProps {
//   myTodos: ITodoModel[];
// }

const TodoIndex = ({ myTodos }: { myTodos: ITodoModel[] }) => {
  todoStore.todos = myTodos;
  todoStore.myTodo = todoStore.resetTodoData();
  return (
    <Box maxWidth="8xl" margin="auto" p={5}>
      <TodoList />
      <TodoAdd />
    </Box>
  );
};
// const TodoIndex: NextPage<ITodoIndexProps> = ({ myTodos }) => {
//   return (
//     <Box maxWidth="8xl" margin="auto" p={5}>
//       <TodoList />
//       <TodoAdd />
//     </Box>
//   );
// };

export default TodoIndex;
