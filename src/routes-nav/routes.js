import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import NewsList from "../news/NewsList";
import SavedArticles from "../news/savedArticles";
import NewsDetail from "../news/NewsDetail";

// Assuming these imports are correct based on your project structure

function AppRoutes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `signup=${typeof signup}`,
  );



  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<NewsList category="health" country="us"/>} />

        <Route path="/home" element={<NewsList />} />

        <Route path="/articles/saved" element={<SavedArticles />} />

        <Route path="/news/:title" element={<NewsDetail />} />

        <Route path="/auth/login" element={<LoginForm login={login} />} />

        <Route path="/auth/signup" element={<SignupForm signup={signup} />} />

        {/* For logout, since it's an action rather than a component to be rendered,
            it might be handled with a button or link elsewhere in your app that calls the logout function.
            If you need a route to perform logout, consider using a route to render a component
            that performs the logout action on render, then redirects. */}
        
        {/* Redirect replacement with Navigate for default redirection */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;

