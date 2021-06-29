import * as React from "react";
import { Button, Input, Grid, Wrap, Flex, Spacer } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import todoStore from "../controller/todoStore";

function TodoAdd() {
  return (
    // <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
    <div>
      <Flex pt={2}>
        <Input
          position="static"
          mx={2}
          placeholder="New todo"
          value={todoStore.myTodo.text}
          onChange={(evt) => (todoStore.myTodo.text = evt.target.value)}
        />
        <Spacer />
        <Button
          position="static"
          onClick={() => {
            if (todoStore.myTodo.text === "") {
              return alert("Hey! your Todo can't be empty!!");
            }
            return todoStore.addTodo();
          }}
        >
          Add Todo
        </Button>
      </Flex>
    </div>
    // </Grid>
  );
  // return (
  //   <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
  //     <Input
  //       placeholder="New todo"
  //       value={store.newTodo}
  //       onChange={(evt) => (store.newTodo = evt.target.value)}
  //     />
  //     <Button
  //       onClick={() => {
  //         if (store.newTodo === "") {
  //           return alert("Hey! your Todo can't be empty!!");
  //         }
  //         return store.addTodo(store.newTodo);
  //       }}
  //     >
  //       Add Todo
  //     </Button>
  //   </Grid>
  // );
}

export default observer(TodoAdd);
