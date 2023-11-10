import Axios from "axios";
import dayjs from "dayjs";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const array = ["hello", "there!"];
console.log(array.join(" "));

const obj: { name: string; age: number } = {
  name: "kaustubh",
  age: 21,
};
console.log(obj);

const date = dayjs();
console.log(date);

const url = "https://jsonplaceholder.typicode.com/todos/1";

Axios.get(url).then(
  ({ data: { id, userId, title, completed } }: { data: Todo }) => {
    logTodo(userId, completed, id, title);
  }
);

// OR

// Axios.get(url).then(({ data }) => {
//   const { id, userId, title, completed } = data as Todo;

//   logTodo(userId, completed, id, title);
// });

const logTodo: (
  userId: number,
  completed: boolean,
  id: number,
  title: string
) => void = (userId, completed, id, title) => {
  console.log(`
  The user ${userId} has ${
    completed ? "finished" : "not finished"
  } the todo ${id} with the title "${title}".
  `);
};

// OR

// const logTodo = (userId: number, completed: boolean, id: number, title: string): void => {
//   console.log(`
//   The user ${userId} has ${
//     completed ? "finished" : "not finished"
//   } the todo ${id} with the title "${title}".
//   `);
// };

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let colors: (string | boolean)[] = ["red", "green", "blue"];

let found: boolean;
found = false;
console.log(found, "found");
