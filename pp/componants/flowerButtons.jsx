import "./flowerButtons.css";
import PLANTS from "../data";
import { useState } from "react";


export default function FlowerButtons({ Children }) {
  const [cart, setCart] = useState([]);
  const flowerMap = PLANTS.reduce((combine, flower) => {
    combine[flower.id] = flower;
    return combine;
  }, {});

  const flowerButtonsClick = (flower) => {
    setCart((cart) => [...cart, flower]);
    console.log(cart);
  };

  return (
    <div className="plants">
      {Object.values(flowerMap).map((flower) => (
        <div className="items" key={flower.id}>
          <h3>{flower.name}</h3>
          <p className="flower">{flower.image}</p>
          <br />
          <button onClick={() => flowerButtonsClick(flower)}>
            Add To Cart
          </button>
        </div>
      ))}
      {/* <FlowerContext.Provider value={flowerButtonsClick}>
        {Children}
      </FlowerContext.Provider> */}
    </div>
  );
}
