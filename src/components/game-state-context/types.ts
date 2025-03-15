export type GameStateContextProvider = {
  children: React.ReactNode;
};

export type GameStateContextValue = {
  totalPoints: number;
  result: Result | null;
  selectedGesture: GameGesture | null;
  computerGesture: GameGesture | null;
  selectGesture: (gesture: GameGesture) => void;
  playAgain: () => void;
  gameStage: GameStage;
};

export enum GameGesture {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

export enum GameStage {
  idle = "idle",
  playerSelected = "playerSelected",
  computerChoosing = "computerChoosing",
  result = "result",
}

export enum Result {
  victory = "victory",
  defeat = "defeat",
  draw = "draw",
}
