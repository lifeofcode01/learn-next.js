import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import store from "../controller/todoStore";
import { observer } from "mobx-react-lite";
import { ITodoModel } from "../controller/todoStore";

function TodoListItems() {
  return (
    <>
      {store.todos.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />

          <Input
            mx={2}
            value={todo.text + todo.id}
            // onChange={(evt) => (todo.text = evt.target.value)}
          />
          <Button onClick={() => store.deleteTodo2(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemObserver />
    </>
  );
}

export default TodoList;
