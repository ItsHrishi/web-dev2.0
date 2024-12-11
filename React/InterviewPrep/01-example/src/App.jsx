import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function randomStringGenerate() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789 ";
  const length = 50;
  let str = "";
  for (let i = 0; i < 50; i++) {
    const temp = Math.floor(Math.random() * characters.length);
    str = str + characters[temp];
  }
  return str;
}

function getStringArray() {
  const stringArray = [];
  for (let i = 0; i < 100; i++) {
    stringArray.push(randomStringGenerate());
  }
  console.log(stringArray);
  return stringArray;
}

function App() {
  const [stringArray, setStringArray] = useState([]);

  useEffect(() => {
    const array = getStringArray();
    setStringArray(array);
  }, []);

  return (
    <>
      {stringArray.map((str, index) => {
        return (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#212121",
              color: "aliceblue",
              margin: "10px",
              borderRadius: "30px",
              width: "80%",
            }}
            key={index}
          >
            {str}
          </div>
        );
      })}
    </>
  );
}

export default App;
