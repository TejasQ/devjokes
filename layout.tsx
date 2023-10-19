import React from "react";
import { ReactNode } from "react";
import { FC } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Joke App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`body {
  background: linear-gradient(45deg, #FFC3A0, #FFAFBD);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Comic Sans MS', sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
}

form {
  display: grid;
  gap: 1rem;
}

.joke-container {
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.joke-question {
  font-size: 36px;
  font-weight: bold;
  color: #FF5733;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.answer-textarea {
  padding: 10px;
  margin-top: 20px;
  border: 2px solid #FF5733;
  border-radius: 10px;
  resize: none;
  font-size: 16px;
  font-family: 'Comic Sans MS', sans-serif;
}

.submit-button {
  padding: 10px 20px;
  background: linear-gradient(45deg, #FF5733, #FF8C66);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  font-family: 'Comic Sans MS', sans-serif;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.submit-button:hover {
  background: linear-gradient(45deg, #FF8C66, #FF5733);
}
`}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
};
