import React from "react";
import { ReactNode } from "react";
import { FC } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Joke App</title>
        <link rel="stylesheet" href="/index.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
};
