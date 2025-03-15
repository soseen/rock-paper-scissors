import { GameGesture } from "../components/game-state-context/types";

export const getRandomGesture = () => {
  const gestures = Object.values(GameGesture);
  const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];

  return randomGesture;
};
