import React, { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";

export interface CurrentUserType {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  username: string;
  token: string;
}

export interface CurrentUserContext {
  currentUser: CurrentUserType;
  setCurrentUser: (currentUser: CurrentUserType) => void;
  setRememberUser: (rememberUser: boolean) => void;
}

export const UserContext = createContext<CurrentUserContext>(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>();
  const [rememberUser, setRememberUser] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["collectable_moments"]);

  const loadUserInfo = async () => {
    if (!currentUser) {
      setCurrentUser({
        email: cookies.collectable_moments.email,
        created_at: cookies.collectable_moments.created_at,
        updated_at: cookies.collectable_moments.updated_at,
        id: cookies.collectable_moments.id,
        username: cookies.collectable_moments.username,
        token: cookies.collectable_moments.token,
      });
    }
  };

  useEffect(() => {
    if (cookies?.collectable_moments && !currentUser) {
      console.log("currentUser context hit");
      loadUserInfo();
    }
  }, [cookies]);

  useEffect(() => {
    if (currentUser && rememberUser) {
      console.log("cookie set");
      setCookie("collectable_moments", currentUser, {
        path: "/",
        secure: true,
        // i think an 8hr cookie is ok, probably not going to need more than that w/tokens exp
        expires: new Date(Date.now() + 3600 * 1000 * 8),
        sameSite: true,
      });
    }
  }, [currentUser, rememberUser]);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, setRememberUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
