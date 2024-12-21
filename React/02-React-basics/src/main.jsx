import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//  this will work if we declare it as a function behind the seens!!
// createRoot(document.getElementById("root")).render(App());

createRoot(document.getElementById("root")).render(<App />);
