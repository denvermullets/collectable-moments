import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import { CurrentUserType } from "../../providers/UserContext";

type AuthProps = {
  children?: ReactNode;
  currentUser: CurrentUserType;
};

const AuthWrapper: React.FC<AuthProps> = ({ children, currentUser }) => {
  const [cookies] = useCookies(["collectable_moments"]);

  return (
    <>
      {!currentUser && !cookies.collectable_moments ? (
        <Navigate replace to="/sign-up" />
      ) : (
        children
      )}
    </>
  );
};

export default AuthWrapper;
