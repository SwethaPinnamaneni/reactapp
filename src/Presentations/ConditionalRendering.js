import React, { useEffect, useState } from "react";

let Login = (props) => {
  return <h1>Welcome back,SignIn Successfully</h1>;
};
let NotLogin = () => {
  return <h1>Please SignIn</h1>;
};
let LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};
let LogOutButton = (props) => {
  return <button onClick={props.onClick}>LogOut</button>;
};
let UserLogin = (props) => {
  const login = props.login;
  if (login) {
    return <Login/>;
  }
  return <NotLogin />;
};

export const ConditionalRendering = () => {
  const [login, isLoggedIn] = useState(true);
  const [text, setText] = useState("");
  const [button, setButton] = useState();

  const handleLoginClick = () => {
    isLoggedIn(true);
  };
  const handleLogOutClick = () => {
    isLoggedIn(false);
  };
  useEffect(() => {
    if (login) {
      setButton(<LogOutButton onClick={handleLogOutClick} />);
    } else {
      setButton(<LoginButton onClick={handleLoginClick} />);
    }
  }, [login]);
  return (
    <div>
      <div style={{ border: "black", backgroundColor: "lightblue" }}>
        <UserLogin login={login} />
        {button}
        {console.log(login)}
      </div>
    </div>
  );
};
