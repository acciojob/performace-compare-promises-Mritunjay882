// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const fetchNames = async () => {
      try {
        const res = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/todos/1"),
           fetch("https://jsonplaceholder.typicode.com/todos/2"),
          fetch("https://jsonplaceholder.typicode.com/todos/3"),
          fetch("https://jsonplaceholder.typicode.com/todos/4"),
          fetch("https://jsonplaceholder.typicode.com/todos/5"),
          fetch("https://jsonplaceholder.typicode.com/todos/6"),
          fetch("https://jsonplaceholder.typicode.com/todos/7"),
          fetch("https://jsonplaceholder.typicode.com/todos/8"),
          fetch("https://jsonplaceholder.typicode.com/todos/9"),
          fetch("https://jsonplaceholder.typicode.com/todos/10")
        ]);
        const data = await Promise.all(res.map(r => r.json()))
        console.log(data.flat());
      } catch {
        throw Error("Promise failed");
      }
};