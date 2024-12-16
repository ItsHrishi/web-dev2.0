import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setJokes]);

  return (
    <>
      <h1>Jokes</h1>
      <p>Jokes {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
