import React, { useContext } from "react";
import "./App.css";
import { createUseStyles } from "react-jss";
import AppContainer from "./components/AppContainer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import SignUp from "./views/Auth";
import { CurrentUserContext, UserContext } from "./providers/UserContext";
import AuthWrapper from "./components/AuthWrapper";
import HowItWorks from "./views/HowItWorks";

const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  const { currentUser } = useContext<CurrentUserContext>(UserContext);

  return (
    <AppContainer>
      <div className={classes.root}>
        <Routes>
          <Route
            path="/"
            element={
              <AuthWrapper currentUser={currentUser}>
                <LandingPage />
              </AuthWrapper>
            }
          />
          <Route path="/sign-up" element={<SignUp signIn={false} />} />
          <Route path="/sign-in" element={<SignUp signIn={true} />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </AppContainer>
  );
}

export default App;
