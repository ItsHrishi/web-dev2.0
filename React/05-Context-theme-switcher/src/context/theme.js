import { createContext, useContext } from "react";

// multiple things done same file which we did in two files in previous project

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// this is done so we dont use two imports everytime!!
export default function userTheme() {
  return useContext(ThemeContext);
}
