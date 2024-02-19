import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [link, setLink] = useState(false);
  const handleClick = () => {
    window.location.href = "Routing/UserLogin";
  };
  return (
    <div>
      <div>
        <Link to="Routing/Home">Home</Link>
      </div>
      <div>
        <Link to="Routing/UserSignUp">SignUp</Link>
      </div>
      <div>
        <Link to="Routing/UserLogin">Login</Link>
      </div>
      <button onClick={handleClick}>Click Here</button>
      <button
        onClick={() => {
          setLink(true);
        }}
      >
        Cart
      </button>
      {link === true && <Link to="Routing/Home">Home</Link>}
    </div>
  );
};

export default Menu;
