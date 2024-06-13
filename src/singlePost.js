import React, { useContext, useEffect } from "react";
import { LoginContext } from "./createContext";

const SinglePost = () => {
  let loginData = useContext(LoginContext);

  console.log(loginData);
  return <div>singlePost{loginData}</div>;
};

export default SinglePost;
