import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import "cross-fetch/polyfill"; // add universal-fetch polyfill if needed
import { createFetch } from "../utils/fetch";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";
import bodify from "src/utils/bodify";
import response from "src/utils/response";

const api = "https://api.genshin.dev/";

const _fetch = createFetch(fetch, [bodify()]);
const request = (...params: any) => {
  return _fetch(params)
    .then(response)
    .catch((err) => {
      console.log("request error", err);
    });
};

const IndexPage: NextPage = () => {
  const test = async () => {
    // const res = await _fetch(api);
    const res = await request(api);
    console.log("res", res);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default IndexPage;
