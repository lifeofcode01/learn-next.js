import { configure, makeAutoObservable } from "mobx";
import { createContext } from "react";

configure({
  enforceActions: "never",
});

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  website: string;
}

class UsersStore {
  users: IUserModel[] = [];
  constructor() {
    makeAutoObservable(this);
  }
}
const usersStore = new UsersStore();
export default usersStore;
