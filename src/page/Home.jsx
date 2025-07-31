import React from "react";
import "./Home.css";
import Button from "../components/button/Button.jsx";
import lightLogo from "../assets/Icon.svg";
import darkLogo from  "../assets/dark-Icon.svg";

function Home() {

  return (
    <>
      <div className="home-box B">
        <div className="button-box">
          <Button label="button" variant="Primary" type="light" src={lightLogo} onClick = {()=> alert("Light Button")} status="active"/>
          <Button label="dark-button" variant="Primary" type="dark" src={darkLogo} onClick = {()=> alert("Dark Button")} status="disabled"/>
        </div>
      </div>
    </>
  );
}

export default Home;
