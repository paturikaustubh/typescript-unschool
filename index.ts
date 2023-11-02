import Axios from "axios";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

Axios.get(url).then(({ data }) => {
  const { id, userId, title, completed } = data as Todo;

  logTodo(userId, completed, id, title);
});

const logTodo = (
  userId: number,
  completed: boolean,
  id: number,
  title: string
) => {
  console.log(`
  The user ${userId} has ${
    completed ? "finished" : "not finished"
  } the todo ${id} with the title "${title}".
  `);
};
