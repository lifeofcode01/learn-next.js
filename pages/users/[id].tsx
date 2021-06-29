import { IUserModel } from "@components/users/controller/usersStore";
import UserDetailsCard from "@components/users/ui/UserDetailsCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const Details = ({ user }: { user: IUserModel }) => {
  return (
    <div>
      {/* <h1>{user.name}</h1> */}
      <UserDetailsCard user={user} />
      {/* <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p> */}
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  console.log(`getStaticPaths`);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((user: IUserModel) => {
    console.log(`getStaticPaths ${user}`);

    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  console.log(`getStaticProps`);
  const { id } = context.params as IParams;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

export default Details;
