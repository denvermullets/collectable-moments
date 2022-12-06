import React from "react";
import "./App.css";
import { createUseStyles } from "react-jss";
import AppContainer from "./components/AppContainer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";

const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppContainer>
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/notes" element={<NoteCard />} /> */}
        </Routes>
      </div>
    </AppContainer>
  );
}

export default App;
