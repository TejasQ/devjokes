import React from "react";
import { FC } from "react";
import { APIClient } from "../keelClient";
import { useState } from "react";
import { useEffect } from "react";

const client = new APIClient({
  baseUrl: "https://staging--dev-jokes-KdwKCD.keelapps.xyz/api",
});

export const Question: FC<{ jokeId: string }> = () => {
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your answer: ${answer}`);
  };

  const [joke, setJoke] = useState("");

  useEffect(() => {
    client.api.queries
      .getRandomJoke()
      .then((d) => setJoke(d.data?.question ?? "no jokes :("));
  }, []);

  return (
    <div className="joke-container">
      <h1 className="joke-question">{joke}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="answer-textarea"
          placeholder="Your answer..."
          value={answer}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
