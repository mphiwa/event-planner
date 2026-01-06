//create a shared “state container” that any page can read.
import { createContext, useState } from "react";

export const SessionState = createContext(null);

export function SessionStore({ children }) {
  //Stores the currently saved/active user object (in-memory).
  const [activeUser, setActiveUser] = useState(null);
  //is the person logged in right now?
  const [LoggedIn, setLoggedIn] = useState(false);
  //save the user details and marks the user as logged in.
  function register(userInfo) {
    setActiveUser(userInfo);
    setLoggedIn(true);
  }
  //It checks entered username and password info against activeUser stored info.
  function login(username, password) {
    //If nobody has registered yet login must fail.
    if (!activeUser) {
      return false;
    }
    const usernameMatches = activeUser.username === username;
    const passwordMatches = activeUser.password === password;
    //Mark the session as logged in if valdation works
    if (usernameMatches && passwordMatches) {
      setLoggedIn(true);
      return true;
    }

    return false;
  }
  //Clear session state.
  function logout() {
    setActiveUser(null);
    setLoggedIn(false);
  }
  //group of data and functions that other components can access through the context.
  const value = {
    activeUser,
    LoggedIn,
    register,
    login,
    logout,
  };
  //turns on shared access for everything you wrap inside SessionGate
  return <SessionState.Provider value={value}>{children}</SessionState.Provider>;
}
