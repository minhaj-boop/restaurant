import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500">
      {/* PRODUCT CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="text-xl uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50">
        <div className="">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <hr className="" />
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
