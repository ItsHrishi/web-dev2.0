// type needs to be mentioned in "package.json" if we want to use the import functionality for import and not the require!!
import express from "express";

const app = express();

const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("its working");
// });

// standardazition of apis
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content:
        "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    { id: 2, content: "What do you call fake spaghetti? An impasta!" },
    {
      id: 3,
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    { id: 4, content: "Why don’t eggs tell jokes? They might crack up." },
    {
      id: 5,
      content: "How does a penguin build its house? Igloos it together!",
    },
    { id: 6, content: "I used to play piano by ear, but now I use my hands." },
    {
      id: 7,
      content:
        "I’m reading a book on anti-gravity. It’s impossible to put down.",
    },
    {
      id: 8,
      content: "Why do cows have hooves instead of feet? Because they lactose.",
    },
    { id: 9, content: "What’s orange and sounds like a parrot? A carrot." },
    {
      id: 10,
      content:
        "Why don’t scientists trust atoms? Because they make up everything.",
    },
  ];
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log("app running on port : ", PORT);
});
