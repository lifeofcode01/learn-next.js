import { configure, makeAutoObservable } from "mobx";
import { createContext } from "react";

configure({
  enforceActions: "never",
});

export const removeTodo = (todos: ITodoModel[], id: number): ITodoModel[] =>
  todos.filter((todo) => todo.id !== id);

export interface ITodoModel {
  id: number;
  text: string;
  done: boolean;
}

class Store {
  todos: ITodoModel[] = []; //list of todos and assign it to empty list.
  myTodo: ITodoModel = this.resetTodoData();

  resetTodoData() {
    return {
      //   id: 0,
      id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
      text: "",
      done: false,
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    console.log(`myTodo ${this.myTodo.text}`);
    this.todos.push(this.myTodo);
    this.myTodo = this.resetTodoData();
  }

  deleteTodo(id: number) {
    console.log(`todos : ${this.todos}`);
    console.log(`delete id : ${id}`);
    this.todos.filter((todo) => todo.id !== id);
  }
  deleteTodo2(id: number) {
    this.todos = removeTodo(this.todos, id);
  }

  onTodosFromApi = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      // .then((data) => store.todos.push(data));
      .then((data) => (this.todos = data));

    this.myTodo = this.resetTodoData();
  };
}

export const todoStoreContext = createContext<Partial<Store>>({});

const todoStore = new Store();
export default todoStore;

// import { configure, makeAutoObservable } from "mobx";
// import { ITodoModel, TodoModel } from "../model/TodoModel";

// configure({
//   enforceActions: "never",
// });

// export const removeTodo = (todos: ITodoModel[], id: number): ITodoModel[] =>
//   todos.filter((todo) => todo.id !== id);

// class Store {
//   //   todos: ITodoModel[] = []; //list of todos and assign it to empty list.
//   todos: ITodoModel[] = []; //list of todos and assign it to empty list.
//   myTodo: ITodoModel = {
//     //   id: 0,
//     id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     text: "",
//     done: false,
//   };

//   resetTodoData() {
//     this.myTodo = {
//       //   id: 0,
//       id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//       text: "",
//       done: false,
//     };
//   }
//   //   myTodo: ITodoModel;

//   constructor() {
//     const tom = new TodoModel();
//     console.log(`tom ${tom.id}`);
//     makeAutoObservable(this);
//   }

//   addTodo() {
//     // let todo: Todo = {
//     //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     //   text: myNewTodo,
//     //   done: false,
//     // };
//     console.log(`myTodo ${this.myTodo.text}`);
//     this.todos.push(this.myTodo);

//     this.resetTodoData();
//     // this.myTodo.id++;
//     // this.myTodo.text = "";
//     // this.myTodo.done = false;
//     // this.newTodo = "";
//     //   this.myTodo = {
//     //     id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     //     text: "",
//     //     done: false,
//     //   };
//   }
//   //   addTodo(myNewTodo: string) {
//   //     // let todo: Todo = {
//   //     //   id: 0,
//   //     // //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//   //     //   text: myNewTodo,
//   //     //   done: false,
//   //     // };
//   //     this.todos.push(this.myTodo);
//   //     this.myTodo.id++;
//   //     this.newTodo = "";
//   //     // this.myTodo = {
//   //     //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//   //     //   text: "",
//   //     //   done: false,
//   //     // };
//   //   }

//   deleteTodo(id: number) {
//     console.log(`todos : ${this.todos}`);
//     console.log(`delete id : ${id}`);
//     this.todos.filter((todo) => todo.id !== id);
//   }
//   deleteTodo2(id: number) {
//     this.todos = removeTodo(this.todos, id);
//   }

//   onLoad = () => {
//     fetch(
//       "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
//     )
//       .then((resp) => resp.json())
//       // .then((data) => store.todos.push(data));
//       .then((data) => (this.todos = data));
//   };
// }

// const store = new Store();
// export default store;

// import { configure, makeAutoObservable } from "mobx";

// configure({
//   enforceActions: "never",
// });

// export interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }

// class Store {
//   todos: Todo[] = []; //list of todos and assign it to empty list.
//   myTodo: Todo = {
//     id: 0,
//     // id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     text: "",
//     done: false,
//   };
//   newTodo: string = "";

//   constructor() {
//     makeAutoObservable(this);
//   }

//   addTodo() {
//     // let todo: Todo = {
//     //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     //   text: myNewTodo,
//     //   done: false,
//     // };
//     this.todos.push(this.myTodo);
//     this.myTodo.id++;
//     this.myTodo.text = "";
//     this.myTodo.done = false;
//     // this.newTodo = "";
//     //   this.myTodo = {
//     //     id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//     //     text: "",
//     //     done: false,
//     //   };
//   }
//   //   addTodo(myNewTodo: string) {
//   //     // let todo: Todo = {
//   //     //   id: 0,
//   //     // //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//   //     //   text: myNewTodo,
//   //     //   done: false,
//   //     // };
//   //     this.todos.push(this.myTodo);
//   //     this.myTodo.id++;
//   //     this.newTodo = "";
//   //     // this.myTodo = {
//   //     //   id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
//   //     //   text: "",
//   //     //   done: false,
//   //     // };
//   //   }

//   deleteTodo(id: number) {
//     console.log(`todos : ${this.todos}`);
//     console.log(`delete id : ${id}`);
//     this.todos.filter((todo) => todo.id !== id);
//   }

//   onLoad = () => {
//     fetch(
//       "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
//     )
//       .then((resp) => resp.json())
//       // .then((data) => store.todos.push(data));
//       .then((data) => (this.todos = data));
//   };
// }

// const store = new Store();
// export default store;
