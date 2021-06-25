import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../controller/todoStore";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.myTodo.text}
        onChange={(evt) => (store.myTodo.text = evt.target.value)}
      />
      <Button
        onClick={() => {
          if (store.myTodo.text === "") {
            return alert("Hey! your Todo can't be empty!!");
          }
          return store.addTodo();
        }}
      >
        Add Todo
      </Button>
    </Grid>
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
