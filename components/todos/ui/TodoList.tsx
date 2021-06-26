import * as React from "react";
import {
  Button,
  Input,
  Flex,
  Checkbox,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import todoStore from "../controller/todoStore";
import { observer } from "mobx-react-lite";
import { ITodoModel } from "../controller/todoStore";

function TodoListItems() {
  return (
    <>
      {todoStore.todos.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />

          <Input
            mx={2}
            value={todo.text + todo.id}
            onChange={(evt) => DOMRectReadOnly}
            // onChange={(evt) => (todo.text = evt.target.value)}
          />
          <Button onClick={() => todoStore.deleteTodo2(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Flex pt={2}>
        <Heading>Todo List</Heading>
        <Spacer />
        <Button onClick={() => todoStore.onTodosFromApi()}>
          Load todo from api
        </Button>
      </Flex>
      <TodoListItemObserver />
    </>
  );
}

export default TodoList;
