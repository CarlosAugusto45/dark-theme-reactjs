import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

import { dark, light } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("theme");

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return light;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
