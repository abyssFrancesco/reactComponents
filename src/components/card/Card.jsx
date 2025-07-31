import React from "react";
import "./Card.css";
import darkLogo from "../../assets/dark-Icon.svg";

function Card() {
  return (
    <>
      <div className="card B">
        <h1>Card</h1>
        <img src={darkLogo} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          ullam voluptate quo aperiam, distinctio, ex officia voluptates
          perspiciatis saepe repellendus harum quis facilis doloremque. Ea
          soluta natus eveniet culpa repudiandae sint eligendi recusandae
          quisquam assumenda consequuntur quidem consequatur laborum harum
          itaque numquam asperiores officiis voluptates accusamus eaque labore,
          autem et placeat deleniti ducimus! Ea sit, facilis quaerat dolor ullam
          nostrum dolores architecto beatae reprehenderit saepe excepturi iure
          quos voluptas deserunt aliquid cumque perferendis velit mollitia
          provident optio dignissimos consequatur ipsum aliquam deleniti? Iusto,
          impedit est adipisci reprehenderit quisquam quis ex quidem dolores,
          et, eius consequuntur cumque ipsa tenetur quo saepe?
        </p>
      </div>
    </>
  );
}

export default Card;
