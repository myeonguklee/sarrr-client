import React from "react";
import Carousel from "./Carousel";

const Step2 = ({ Ox }) => {
  console.log("Ox", Ox);

  return (
    <div className="w-full h-full min-h-[360px] bg-[rgba(255,255,255,0.3)] shadow-[0_0_30px_rgba(66,72,81,0.3)] border-[10px] border-[rgba(255,255,255,0.2)] rounded-[20px] flex py-3-5 gap-5 relative">
      <div className="absolute top-[-20px] left-[-10px] rounded-[20px] bg-white w-[10%] h-[40px] flex justify-center items-center">
        <h1 className="text-xl">step 2</h1>
      </div>
      <Carousel slides={Ox} type="ox" />
    </div>
  );
};

export default Step2;
