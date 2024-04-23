import React, { useState, useEffect } from "react";
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import NewsApi from "./Api/api";
import jwt from "jsonwebtoken";

import NewsContext from './news/NewsContext';
import { UserContext } from './auth/UserContext';

import Routes from "./routes-nav/routes"; // Update this path according to your project structure
import Navigation from "./routes-nav/navigation"; // Update this path according to your project structure

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "news-token";

function App() {
  const [currentNews, setCurrentNews] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(() => {
    async function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          NewsApi.token = token;
          let currentUser = await NewsApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
    }
    loadUserInfo();
  }, [token]);

  async function signup(signupData) {
    try {
      let token = await NewsApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await NewsApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, token }}>
      <NewsContext.Provider value={{ currentNews, setCurrentNews }}>
        <Router>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </Router>
      </NewsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

