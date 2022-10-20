import React, { useState, useEffect } from "react";

interface Props {
  children: JSX.Element;
}

const AuthContext = React.createContext("");

const AuthProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(sessionStorage.getItem("auth") || "");
  }, []);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
