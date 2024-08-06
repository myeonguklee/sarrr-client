import React, { useState, useEffect } from "react";
import GameTurns from "../../components/Common/GameTurns";
import ExitBtn from "../../components/Buttons/ExitBtn";
import Chatbox from "../../components/Common/Chatbox";
import BalanceGameModal from "./BalanceGameModal";
// import versus from "https://sarrr.s3.ap-northeast-2.amazonaws.com/assets/versus.png";
// import versus from "./../../assets/Balance_game/versus.png"

const BalanceGetReady = ({ onClose, dots }) => {
  const versus = "https://sarrr.s3.ap-northeast-2.amazonaws.com/assets/versus.png"
  const [showModal, setShowModal] = useState(false);
  const[questions, setQuestions] = useState({1:"", 2:"",3:""})
  const [selectedAnswers, setSelectedAnswers] = useState({ 1: null, 2: null, 3: null });

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="bg-custom-gradient-game w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[1024px] h-[90%] bg-[rgba(255,255,255,0.3)] m-auto rounded-[40px] flex flex-col relative p-10 overflow-hidden">
        <div className="h-[5%] flex justify-between items-center">
          <div className="w-[90%] flex justify-center absolute top-3">
            <GameTurns sectionNumber={3} />
          </div>
          <div className="w-[10%] flex justify-center">
            <ExitBtn />
          </div>
        </div>
        <div className="flex-grow flex overflow-hidden mt-5 h-[52vh]">
          <div className="bg-[rgba(255,255,255,0.9)] flex-[7] h-full mr-5 rounded-[20px] flex justify-center items-center overflow-hidden">
            <p className="m-5">camera background</p>
          </div>
          <div className="flex-[3] ml-5 h-full rounded-[20px] flex flex-col justify-center items-center overflow-hidden">
            <Chatbox />
          </div>
        </div>
        <div className="flex-none mt-10 w-full h-[7rem] rounded-[40px] bg-[rgba(255,255,255,0.7)] shadow-[0_0_30px_rgba(66,72,81,0.2)] text-[#55B5EC] text-[24px] flex flex-col justify-between p-[1rem]">
          <img className="absolute" src={versus} alt="star 그림" />
          <div className="flex-grow flex items-center justify-center">
            <span className="text-[rgba(85,181,236)]">
              밸런스 게임 문제를 준비 중{dots}
            </span>
          </div>
          <div className="flex justify-end"></div>
        </div>
      </div>
      {showModal && (
        <BalanceGameModal btnText="저장" onClose={onClose} />
      )}
    </div>
  );
};

export default BalanceGetReady;
