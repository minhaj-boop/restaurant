import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="">
      {/* PRODUCT CONTAINER */}
      <div className="">
        {/* SINGLE ITEM */}
        <div className="">
          <Image src="/temporary/p1.png" alt="" fill />
          <div className="">
            <h1>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="">
        <div className="">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <hr className="" />
        <button className="">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
