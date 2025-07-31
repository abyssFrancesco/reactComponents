import React from "react";
import "./Button.css";
import Logo from "../../assets/react.svg";

function Button() {
  console.log("Button");
  return (
    <>
      <div className="button B">
        <img src={Logo} alt="" />
        <p>Button</p>
      </div>
    </>
  );
}

export default Button;
