import PLANTS from "../data";
import { useState } from "react";

export default function cart({ flowerButtonsClick }) {
  const [plusButtonsClick, minusButtonsClick] = useState([]);

  return (
    <>
      {Object.values(PLANTS).map((item, flower) => (
        <div key={flower}>
          <p>{item.image}</p>
          <button onClick={() => plusButtonsClick(flower)}>+</button>
          <button onClick={() => minusButtonsClick(flower)}>-</button>
        </div>
      ))}
    </>
  );
}
