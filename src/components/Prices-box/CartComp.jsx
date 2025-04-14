import React from "react";
import classNames from "classnames";
import useModelStore from "./store";

const CartComp = ({ id, img, name }) => {
  const inViewModel = useModelStore((state) => state.inViewModel);

  return (
    <div
      className={classNames(
        "absolute inset-0nh-full w-full rounded-2xl bg-gradient-to-br from-[#f7f0ff] to-[#a78afe]",
        inViewModel === id ? "opacity-100" : "opacity-0"
      )}
    >
      <img
        id={id}
        className={classNames("rounded-2xl shadow-lg")}
        src={img}
        alt={name}
      />
    </div>
  );
};

export default CartComp;
