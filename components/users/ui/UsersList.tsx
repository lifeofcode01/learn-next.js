import Link from "next/link";
import React from "react";
import usersStore from "../controller/usersStore";
import UserCard from "./UserListTile";
const Userslist = () => {
  return (
    <div>
      {usersStore.users.map((user) => (
        // <Link href={"/users/users" + user.id} key={user.id} passHref>
        //   <a>
        //     <UserCard key={user.id} user={user} />
        //   </a>
        // </Link>
        <UserCard key={user.id} user={user} />
      ))}

      {/* <UserCard /> */}
    </div>
  );
};

export default Userslist;
