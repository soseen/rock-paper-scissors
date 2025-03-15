import { useMemo } from "react";
import styled from "styled-components";
import { useGameStateContext } from "../../game-state-context/game-state-context";
import { GameStage } from "../../game-state-context/types";
import { Result } from "../../game-state-context/types";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
  width: 100%;
  height: 100%;
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  transition: opacity 1500ms ease-out, max-width 1500ms ease-out;

  &.active {
    opacity: 1;
    max-width: 100%; /* Adjust this based on your UI */
  }
`;

const ResultText = styled.p`
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  margin: 0;
`;

const Button = styled.button`
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-radius: 0.3em;
  color: var(--dark-text);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  font-size: 2em;
  margin: 0;
  white-space: nowrap;
  text-transform: uppercase;
`;

const ResultPanel = () => {
  const { gameStage, result, playAgain } = useGameStateContext();
  const text = useMemo(() => {
    switch (result) {
      case Result.victory:
        return "You Win!";
      case Result.defeat:
        return "You Lose";
      case Result.draw:
      default:
        return "It's a Draw!";
    }
  }, [result]);
  return (
    <ResultContainer className={gameStage === GameStage.result ? "active" : ""}>
      <ResultText>{text}</ResultText>
      <Button onClick={playAgain}>Play Again</Button>
    </ResultContainer>
  );
};

export default ResultPanel;
