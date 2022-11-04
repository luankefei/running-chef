import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

// redux
import store from "@app/store";

// comps
import Layout from "@containers/Layout";
import AuthProvider from "@contexts/AuthProvider";
import ErrorBoundary from "@containers/ErrorBoundray";

// styles
import "../styles/globals.css";
import "antd/dist/antd.css";
import globalStyles from "../styles/globals";

export default function MyApp({ Component, pageProps }: AppProps) {
  const renderChildren = () => {
    console.log("Component.name", Component.displayName);
    if (Component.displayName === "Login") return <Component />;
    return (
      <Layout>
        {/* <FetchContext.Provider> */}
        <Component {...pageProps} />
        {/* </FetchContext.Provider> */}
        {/* </OpenIMContainer> */}
      </Layout>
    );
  };
  return (
    <>
      {globalStyles}
      <Head>
        <title>ingroup - your web3 address book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <ErrorBoundary>{renderChildren()}</ErrorBoundary>
        </AuthProvider>
      </Provider>
    </>
  );
}
