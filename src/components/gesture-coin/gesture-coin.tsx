import React from "react";
import { GameGesture } from "../game-state-context/types";
import { getGestureIcon } from "../../utils/getGestureIcon";
import styled, { keyframes } from "styled-components";

type Props = {
  type: GameGesture;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
};

const blink = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.3);
  }
  100% {
  transform: scale(1);
  }
`;

const GestureCoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4em;
  border-radius: 100%;
  width: 9em;
  height: 9em;

  box-shadow: inset -2px -7px 2px rgb(30 30 30 / 46%);

  &.blink {
    animation: ${blink} 300ms linear forwards;
  }

  &.fadedOut {
    opacity: 0.9;
    background: var(--header-outline);
  }

  @media screen and (max-width: 580px) {
    width: 8em;
    height: 8em;
  }
`;

const GestureImageContainer = styled.div`
  background: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2.5em;
  box-sizing: border-box;

  box-shadow: inset 1px 7px 0px rgb(65 81 139 / 20%);

  &:active {
    background: #eeeeee;
`;

const GestureIcon = styled.img`
  width: 100%;
`;

const GestureCoin = React.forwardRef<HTMLDivElement | null, Props>(
  ({ type, style, innerStyle }, ref) => {
    return (
      <GestureCoinContainer ref={ref} className={`coin-${type}`} style={style}>
        <GestureImageContainer style={innerStyle}>
          <GestureIcon src={getGestureIcon(type)} alt={type} />
        </GestureImageContainer>
      </GestureCoinContainer>
    );
  }
);

export default GestureCoin;
