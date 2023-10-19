import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Layout } from "./layout";
import { Question } from "./question/page";
import { Answer } from "./answer/page";

// get `jid` from query params
const urlParams = new URLSearchParams(window.location.search);
const jid = urlParams.get("jid") ?? "";

hydrateRoot(
  document,
  <Layout>
    {window.location.pathname.includes("question") ? (
      <Question jokeId={jid} />
    ) : (
      <Answer jokeId={jid} />
    )}
  </Layout>
);
