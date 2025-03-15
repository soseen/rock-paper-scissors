import { useGameStateContext } from "../game-state-context/game-state-context";
import styled from "styled-components";
import { GameGesture } from "../game-state-context/types";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items-center;
    padding: 1.6em;
    border-radius: 0.8em;
    border-width: 0.2em;
    border-color: var(--header-outline); 
    max-width: 800px;
    width: 100%;
    border-style: solid;
`;

const GesturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Gesture = styled.p`
  text-transform: uppercase;
  color: white;
  font-size: 2em;
  margin: 0;
  line-height: 1;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12em;
  height: 10em;
  box-shadow: 2px 2px 10px 4px #00000040;
  border-radius: 0.8em;
  background: white;
  align-self: center;
`;

const Score = styled.p`
  color: var(--score-text);
  text-transform: uppercase;
  font-size: 1.5em;
  margin: 0;
  letter-spacing: 3px;
`;

const ScoreValue = styled.p`
  font-size: 5em;
  color: var(--dark-text);
  margin: 0;
  line-height: 1;
`;

const ScorePanel = () => {
  const { totalPoints } = useGameStateContext();

  return (
    <Header>
      <GesturesContainer>
        {Object.values(GameGesture).map((gesture) => (
          <Gesture key={gesture}>{gesture}</Gesture>
        ))}
      </GesturesContainer>
      <ScoreContainer>
        <Score>SCORE</Score>
        <ScoreValue>{totalPoints}</ScoreValue>
      </ScoreContainer>
    </Header>
  );
};

export default ScorePanel;
