import React from "react";
import { FC } from "react";
import { APIClient } from "../keelClient";
import { useState } from "react";
import { useEffect } from "react";

const client = new APIClient({
  baseUrl: "https://staging--dev-jokes-KdwKCD.keelapps.xyz",
});

export const Question: FC<{ jokeId: string }> = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const x = client.api.queries.getJokeById("aef");
  }, []);
  return <div>hiiiii</div>;
};
