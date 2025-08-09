"use client";
import React from "react";
import Main from "./containers/Main";
import "./App.scss";
import {StyleProvider} from "./contexts/StyleContext";

function App() {
  return (
    <StyleProvider>
      <div>
        <Main />
      </div>
    </StyleProvider>
  );
}

export default App;
