import React from "react";
import AuthContainer from "./AuthContainer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

type MomentAuthProps = {
  signIn: boolean;
};

const MomentAuth: React.FC<MomentAuthProps> = ({ signIn }) => {
  return <AuthContainer>{signIn ? <SignIn /> : <SignUp />}</AuthContainer>;
};

export default MomentAuth;
