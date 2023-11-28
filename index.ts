import Axios from "axios";
import dayjs from "dayjs";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
// ==================================================||  ARRAYS  ||============================================= \\
const array: (
  | { Tata: string[] }
  | { Mahindra: string[] }
  | { Honda: (string | number)[] }
)[] = [
  { Tata: ["Zest", "Safari", "Nexon"] },
  { Mahindra: ["XUV"] },
  { Honda: ["City", 69] },
];
console.log(array.join(" "));

// const arrayOfArrays: string[][] = [["Hello"]];
const arrayOfArrays: (string | number)[] = ["Hello", 0];
const value = arrayOfArrays[0];

// ==================================================||  TUPLES  ||============================================= \\
type CarSpecs = [string, number, boolean];
// const carSpecs: [string, number, boolean] = ["Polo", 69, true]
const carSpecs: CarSpecs = ["Polo", 69, true];

const obj: {
  name: string;
  age: number;
  coords: { lat: number; long: number };
} = {
  name: "kaustubh",
  age: 21,
  coords: {
    lat: 21,
    long: 32,
  },
};
console.log(obj);

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

// ==================================================||  OBJECTS  ||============================================= \\
interface Car {
  company: string;
  model: string;
  mfgYear: number;
  isManual: boolean;
  printDetails(): string;
}

const toyotaSupra: Car = {
  company: "Toyota",
  model: "Supra",
  mfgYear: 1978,
  isManual: true,
  printDetails() {
    return `This ${this?.model ?? "GAY"} from ${
      this?.company ?? "GAY"
    }, was first manufactured on ${this?.mfgYear ?? "GAY"}.`;
  },
};

const logDetails = (item: Car): string => {
  console.log(item.printDetails());
  return "DONE";
};

logDetails(toyotaSupra);
