import React, { useState } from "react";

export default function Login({ openMain, theme }) {
  return (
    <div id={theme}>
      <div className="container">
        <div className="box">
          <form className="inputContainer">
            <h1>Login</h1>

            <div className="usernameContainer">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="userName"
                placeholder="Enter Username"
              />
            </div>
            <div className="passwordContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Enter password"
              />
            </div>
            <div className="buttonContainer">
              <button onClick={openMain}>Login In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
