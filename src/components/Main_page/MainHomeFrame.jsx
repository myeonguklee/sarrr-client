import React from "react";

const MainHomeFrame = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[1024px] max-h-[600px] bg-[rgba(255,255,255,0.3)] shadow-[0_0_30px_rgba(66,72,81,0.3)] rounded-[30px] border-[10px] border-[rgba(255,255,255,0.2)] flex justify-center items-center">
      {children}
    </div>
  );
};
export default MainHomeFrame;
