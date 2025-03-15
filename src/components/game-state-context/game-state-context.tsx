import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GameStateContextValue,
  GameStateContextProvider,
  GameGesture,
  GameStage,
  Result,
} from "./types";
import { getRandomGesture } from "../../utils/getRandomGesture";

const GameStateContext = createContext<GameStateContextValue>(
  {} as GameStateContextValue
);

const GAME_RULES = [
  {
    gestureKey: GameGesture.rock,
    beats: [GameGesture.scissors, GameGesture.lizard],
  },
  {
    gestureKey: GameGesture.paper,
    beats: [GameGesture.rock, GameGesture.spock],
  },
  {
    gestureKey: GameGesture.scissors,
    beats: [GameGesture.paper, GameGesture.lizard],
  },
  {
    gestureKey: GameGesture.lizard,
    beats: [GameGesture.spock, GameGesture.paper],
  },
  {
    gestureKey: GameGesture.spock,
    beats: [GameGesture.scissors, GameGesture.rock],
  },
];

export const GameStateProvider = ({ children }: GameStateContextProvider) => {
  const [gameStage, setGameStage] = useState<GameStage>(GameStage.idle);
  const [selectedGesture, setSelectedGesture] = useState<GameGesture | null>(
    null
  );
  const [computerGesture, setComputerGesture] = useState<GameGesture | null>(
    null
  );
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [result, setResult] = useState<Result | null>(null);

  const determineWinner = useCallback(() => {
    if (computerGesture === selectedGesture) return 0;
    const ruleToApply = GAME_RULES.find(
      (rule) => rule.gestureKey === selectedGesture
    );
    const points = ruleToApply?.beats.includes(computerGesture as GameGesture)
      ? 1
      : -1;
    return points;
  }, [computerGesture, selectedGesture]);

  const startGame = () => {
    setGameStage(GameStage.computerChoosing);

    setTimeout(() => {
      const randomGesture = getRandomGesture();
      setComputerGesture(randomGesture);
      setGameStage(GameStage.result);
    }, 5000);
  };

  const selectGesture = (gesture: GameGesture) => {
    setSelectedGesture(gesture);
    setGameStage(GameStage.playerSelected);

    setTimeout(() => {
      startGame();
    }, 2000);
  };

  useEffect(() => {
    if (!!computerGesture && !!selectedGesture) {
      const pointsAcquired = determineWinner();
      setTotalPoints((prev) => prev + pointsAcquired);
      setResult(
        pointsAcquired === 1
          ? Result.victory
          : pointsAcquired === -1
          ? Result.defeat
          : Result.draw
      );
    }
  }, [computerGesture, selectedGesture, determineWinner]);

  const playAgain = () => {
    setSelectedGesture(null);
    setComputerGesture(null);
    setResult(null);
    setGameStage(GameStage.idle);
  };

  return (
    <GameStateContext.Provider
      value={{
        result,
        selectedGesture,
        computerGesture,
        selectGesture,
        totalPoints,
        gameStage,
        playAgain,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameStateContext = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error(
      "useGameStateContext has to be used within GameStateProvider"
    );
  }
  return context;
};
