import { Button } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import TodoIndex from "@components/todos/ui";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import todoStore, { ITodoModel } from "@components/todos/controller/todoStore";

const MyTodos = ({ todos }: { todos: ITodoModel[] }) => {
  // todoStore.todos = todos;

  return (
    <>
      <TodoIndex myTodos={todos}></TodoIndex>
      {/* {
      // todoStore.todos = todos;
      JSON.stringify(todos)
    } */}
    </>
  );
};
// interface ITodoProps {
//   todos: ITodoModel[];
// }

// const MyTodos: NextPage<ITodoProps> = ({ todos }) => {
//   // todoStore.todos = todos;

//   return (
//     <>
//       <TodoIndex myTodos={todos}></TodoIndex>
//       {/* {
//       // todoStore.todos = todos;
//       JSON.stringify(todos)
//     } */}
//     </>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   console.log(`inside Todo getServerSideProps`);
//   const res = await fetch(
//     `https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json`
//   );
//   const todos: ITodoModel[] = await res.json();
//   todoStore.todos = todos;

//   if (!todos) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { todos }, // will be passed to the page component as props
//   };
// };

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(`inside Todo getServerSideProps`);
  const res = await fetch(
    `https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json`
  );
  const todos: ITodoModel[] = await res.json();
  // todoStore.todos = todos;

  if (!todos) {
    return {
      notFound: true,
    };
  }

  return {
    props: { todos }, // will be passed to the page component as props
  };
};

export default MyTodos;
