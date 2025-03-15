import GameStageDisplay from "./components/game-stage/game-stage-display";
import { GameStateProvider } from "./components/game-state-context/game-state-context";
import ScorePanel from "./components/score-panel/score-panel";
import GlobalStyle from "./global-style";

import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
  width: 100vw;
  color: white;
  padding: 3em;
  box-sizing: border-box;
  gap: 4em;
`;

const App = () => {
  return (
    <GameStateProvider>
      <GlobalStyle />
      <GameContainer>
        <ScorePanel />
        <GameStageDisplay />
      </GameContainer>
    </GameStateProvider>
  );
};

export default App;
