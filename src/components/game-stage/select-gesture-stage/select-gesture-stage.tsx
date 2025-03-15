import GestureButton from "../../gesture-button/gesture-button";
import { GameGesture } from "../../game-state-context/types";
import PentagonBg from "../../../images/bg-pentagon.svg";
import styled from "styled-components";

const BoardContainer = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6em;

  @media screen and (max-width: 860px) {
    width: 260px;
    height: 260px;
  }
`;

const PentagonImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 1;
`;

const SelectGestureStage = () => {
  return (
    <BoardContainer>
      <PentagonImage src={PentagonBg} alt="pentagon background" />
      {Object.values(GameGesture).map((gesture) => (
        <GestureButton key={gesture} type={gesture} />
      ))}
    </BoardContainer>
  );
};

export default SelectGestureStage;
