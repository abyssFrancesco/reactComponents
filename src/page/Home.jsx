import React from "react";
import "./Home.css";
import Button from "../components/button/Button.jsx";
import lightLogo from "../assets/Icon.svg";
import darkLogo from "../assets/dark-Icon.svg";
import Card from "../components/card/Card.jsx";

function Home() {
  return (
    <>
      <div className="home-box B">
        <div className="button-box">
          <Button
            label="button"
            variant="Primary"
            type="light"
            src={lightLogo}
            onClick={() => alert("Primary Light Button")}
            status="active"
          />
          <Button
            label="dark-button"
            variant="Primary"
            type="dark"
            src={darkLogo}
            onClick={() => alert("Primary Dark Button")}
            status="active"
          />
          <Button
            label="secondary-button"
            variant="Secondary"
            type="light"
            src={lightLogo}
            onClick={() => alert("Secondary Light Button")}
            status="disabled"
          />
        </div>
        <div className="card-box">
          <Card/>
        </div>
      </div>
    </>
  );
}

export default Home;
