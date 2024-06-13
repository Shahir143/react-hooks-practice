import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [details, setDetails] = useState(true);
  return (
    <LoginContext.Provider value={details}>{children}</LoginContext.Provider>
  );
};
export default LoginProvider;
