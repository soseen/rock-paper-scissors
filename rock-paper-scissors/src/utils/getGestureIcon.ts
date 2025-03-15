import { GameGesture } from "../components/game-state-context/types";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";
import IconLizard from "../images/icon-lizard.svg";
import IconSpock from "../images/icon-spock.svg";

export const getGestureIcon = (type: GameGesture) => {
  switch (type) {
    case GameGesture.rock:
      return IconRock;
    case GameGesture.paper:
      return IconPaper;
    case GameGesture.scissors:
      return IconScissors;
    case GameGesture.lizard:
      return IconLizard;
    case GameGesture.spock:
      return IconSpock;
    default:
      return "";
  }
};
