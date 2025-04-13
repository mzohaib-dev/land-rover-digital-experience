import React from "react";
import ModelName from "./ModelName";
import CartComp from "./CartComp";
import PriceCart from "./PriceCart";

const carsModel = [
  {
    name: "Range Rover Evoque",
    id: 0,
    img: "image/CarContainer/Range Rover Evoque.png",
  },
  {
    name: "Range Rover Velar",
    id: 1,
    img: "image/CarContainer/Range Rover Velar.png",
  },
  {
    name: "Range Rover Sport",
    id: 2,
    img: "image/CarContainer/Range Rover Sport.png",
  },
  {
    name: "Range Rover",
    id: 3,
    img: "image/CarContainer/Range Rover.png",
  },
  {
    name: "Defender 130",
    id: 4,
    img: "image/CarContainer/Defender 130.png",
  },
  {
    name: "Defender 110",
    id: 5,
    img: "image/CarContainer/Defender 110.png",
  },
  {
    name: "Defender 90",
    id: 6,
    img: "image/CarContainer/Defender 90.png",
  },
  {
    name: "Discovery Sport",
    id: 7,
    img: "image/CarContainer/Discovery Sport.png",
  },
  {
    name: "Discovery",
    id: 8,
    img: "image/CarContainer/Discovery.png",
  },
  {
    name: "Land Rover Electric",
    id: 9,
    img: "image/CarContainer/Land Rover Electric.png",
  },
  {
    name: "Range Rover By SV",
    id: 10,
    img: "image/CarContainer/Range Rover By SV.png",
  },
];
const CarContainer = () => {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="w-1/4 py-[50vh]">
        <ul>
          {carsModel.map((carModel) => (
            <li key={carModel.id}>
              <ModelName id={carModel.id}>{carModel.name}</ModelName>
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky top-0 flex flex-col h-screen w-3/4 items-center">
        <div className="lg:relative absolute lg:top-[20%] top-[5%] mr-[145%] lg:mr-[0%] aspect-video lg:w-full w-[80vw] rounded-2xl bg-slate-100 [&:has(>_.active-card)]:bg-transparent">
          {carsModel.map((car) => (
            <CartComp id={car.id} img={car.img} name={car.name} />
          ))}
        </div>
        <div className="lg:visible hidden relative w-full top-[40%]">
          <PriceCart />
        </div>
      </div>
    </div>
  );
};

export default CarContainer;
