// To parse this data:
//
//   import { Convert, TodoModel } from "./file";
//
//   const todoModel = Convert.toTodoModel(json);

// export function initilizeModel(){
//      todo:ITodoModel={
//          id: 1;

//      }

// }
// Converts JSON strings to/from your types
// export class TodoModel {
//   id: number;
//   text: string;
//   done: boolean;

//   constructor() {
//     (this.id = 0), (this.text = ""), (this.done = false);
//   }

//   public static toTodoModel(json: string): ITodoModel {
//     return JSON.parse(json);
//   }

//   public static todoModelToJson(value: ITodoModel): string {
//     return JSON.stringify(value);
//   }
// }
export {};
