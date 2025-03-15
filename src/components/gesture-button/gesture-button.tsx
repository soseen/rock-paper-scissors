import React, { useCallback, useEffect, useRef } from "react";
import { GameGesture } from "../game-state-context/types";
import styled from "styled-components";
import { useGameStateContext } from "../game-state-context/game-state-context";
import GestureCoin from "../gesture-coin/gesture-coin";

type Props = {
  type: GameGesture;
  disabled?: boolean;
};

const POSITIONS = {
  rock: { x: "0", y: "30%" },
  paper: { x: "50%", y: "-70%" },
  scissors: { x: "-50%", y: "-35%" },
  lizard: { x: "0", y: "30%" },
  spock: { x: "-50%", y: "-70%" },
};

const GestureButtonContainer = styled.div`
  position: absolute;
  z-index: 2;
  transition: transform 200ms ease-out, opacity 400ms linear;
  cursor: pointer;

  will-change: transform;
  transform-origin: center;

  &.button-rock {
    right: 0;
    bottom: 0;
    transform: translate(0, 30%);
  }

  &.button-paper {
    right: 0;
    top: 50%;
    transform: translate(50%, -70%);
  }

  &.button-scissors {
    top: 0;
    left: 50%;
    transform: translate(-50%, -35%);
  }

  &.button-lizard {
    left: 0;
    bottom: 0;
    transform: translate(0, 30%);
  }

  &.button-spock {
    left: 0;
    top: 50%;
    transform: translate(-50%, -70%);
  }

  &:hover {
    transform: translate(var(--x), var(--y)) scale(1.1);
  }

  &:active {
    transform: translate(var(--x), var(--y)) scale(0.95);
  }

  &.button-pressed {
    z-index: 5;
    transform: translate(var(--x), var(--y)) scale(1.4);
    transition: transform 1500ms cubic-bezier(0.47, 0, 0.333, 1.063);
  }

  &.button-hidden > div {
    opacity: 0.9;
    background: var(--header-outline);
  }
`;

const GestureButton = ({ type, disabled }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectGesture, selectedGesture } = useGameStateContext();

  const onClick = useCallback(() => {
    selectGesture(type);
    if (ref.current) {
      ref.current.classList.add("button-pressed");
    }
  }, [selectGesture, type]);

  useEffect(() => {
    if (selectedGesture && selectedGesture !== type && ref.current) {
      ref.current.classList.add("button-hidden");
    }
  }, [selectGesture, type, selectedGesture]);

  return (
    <GestureButtonContainer
      ref={ref}
      style={
        {
          "--x": POSITIONS[type].x,
          "--y": POSITIONS[type].y,
        } as React.CSSProperties
      }
      className={`button-${type} `}
      {...(!disabled && { onClick: onClick })}
    >
      <GestureCoin type={type} />
    </GestureButtonContainer>
  );
};

export default GestureButton;
