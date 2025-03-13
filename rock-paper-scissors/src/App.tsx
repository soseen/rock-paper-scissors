import "./App.css";

import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1f2937;
  color: white;
`;

const App = () => {
  return <GameContainer></GameContainer>;
};

export default App;
