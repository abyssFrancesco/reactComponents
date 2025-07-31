import React from "react";
import "./Button.css";

function Button({ label, variant, type, src, onClick, status }) {
  function handleClick() {
    if (status !== "disabled") {
      onClick();
    }else{console.log(`Il pulsante ${type} è disabilitato`)};
  }

  return (
    <>
      <button
        className={`button ${variant} ${type} ${status}`}
        onClick={handleClick}
      >
        <img src={src} alt="Pulsante" />
        <label htmlFor="">{label}</label>
      </button>
    </>
  );
}

export default Button;
