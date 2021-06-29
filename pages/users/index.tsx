import Link from "next/link";

const AllUsers = ({ users }: { users: IUserModel[] }) => {
  console.log(users);
  usersStore.users = users;
  console.log(`usersStore.users =${usersStore.users[1].name}`);

  return (
    <>
      <UsersIndex />
    </>
  );
  //     <div>
  //       <h1>All users</h1>
  //       {users.map((user) => (
  //         <Link href={"/users/" + user.id} key={user.id} passHref>
  //           <a>
  //             {/* <h3>{user.name}</h3> */}
  //             <UserCard user={user} />

  //             {/* <h3>{user.name}</h3> */}
  //           </a>
  //         </Link>
  //       ))}
  //     </div>
  //   );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";
import UserCard from "@components/users/ui/UserListTile";
import usersStore, {
  IUserModel,
} from "@components/users/controller/usersStore";
import UsersIndex from "@components/users/ui";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

export default AllUsers;
