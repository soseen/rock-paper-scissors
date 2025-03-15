import React from "react";
import { useGameStateContext } from "../game-state-context/game-state-context";
import { GameStage } from "../game-state-context/types";
import SelectGestureStage from "./select-gesture-stage/select-gesture-stage";
import ComputerChoosingStage from "./computer-choosing-stage.tsx/computer-choosing-stage";

const GameStageDisplay = () => {
  const { gameStage } = useGameStateContext();
  return (
    <>
      {(() => {
        switch (gameStage) {
          case GameStage.idle:
          default:
            return <SelectGestureStage />;
          case GameStage.computerChoosing:
          case GameStage.result:
            return <ComputerChoosingStage />;
        }
      })()}
    </>
  );
};

export default GameStageDisplay;
