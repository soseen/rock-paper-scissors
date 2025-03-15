import { useEffect, useRef, useState } from "react";
import { useGameStateContext } from "../../game-state-context/game-state-context";
import styled from "styled-components";
import { GameGesture, Result } from "../../game-state-context/types";
import { getRandomGesture } from "../../../utils/getRandomGesture";
import GestureCoin from "../../gesture-coin/gesture-coin";
import ResultPanel from "./result-panel";
import { useDimensions } from "../../../hooks/useDimensionts";

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
  max-width: 920px;
  margin-top: 2em;
  padding: 1.6em;
`;

const MainGameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;

const PickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
  }
`;

const PlayerHeader = styled.h2`
  font-size: 2em;
  letter-spacing: 3px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 2em;
  white-space: nowrap;

  @media screen and (max-width: 860px) {
    font-size: 1.4em;
  }
`;

const GesturePlaceholderContainer = styled.div`
  width: 15em;
  height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const GesturePlaceholder = styled.div`
  width: 13em;
  height: 13em;
  color: white;
  border-radius: 100%;
  background-color: #192a45ad;
`;

const ComputerChoosingStage = () => {
  const { selectedGesture, computerGesture, result } = useGameStateContext();
  const [rollingGesture, setRollingGesture] = useState<GameGesture | null>(
    null
  );
  const refPlayerCoin = useRef<HTMLDivElement | null>(null);
  const refComputerCoin = useRef<HTMLDivElement | null>(null);
  const { isSM } = useDimensions();

  useEffect(() => {
    if (!computerGesture) {
      let interval = 0;
      const timeout = setTimeout(() => {
        interval = setInterval(() => {
          const randomGesture = getRandomGesture();
          setRollingGesture(randomGesture);
        }, 300);
      }, 1000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
        clearTimeout(timeout);
      };
    }
  }, [computerGesture]);

  useEffect(() => {
    if (result === Result.defeat) {
      refPlayerCoin.current?.classList.add("fadedOut");
      refComputerCoin.current?.classList.add("blink");
    } else if (result === Result.victory) {
      refComputerCoin.current?.classList.add("fadedOut");
      refPlayerCoin.current?.classList.add("blink");
    }
  }, [result]);

  return (
    <StageContainer>
      <MainGameContainer>
        <PickContainer>
          <PlayerHeader>You Picked</PlayerHeader>
          <GestureCoin
            ref={refPlayerCoin}
            type={selectedGesture!}
            style={{ width: "15em", height: "15em", boxSizing: "border-box" }}
            innerStyle={{ padding: "3em" }}
          />
        </PickContainer>
        {!isSM && <ResultPanel />}
        <PickContainer>
          <PlayerHeader>The House Picked</PlayerHeader>
          {rollingGesture || computerGesture ? (
            <GestureCoin
              ref={refComputerCoin}
              style={{ width: "15em", height: "15em", boxSizing: "border-box" }}
              innerStyle={{ padding: "3em" }}
              type={computerGesture ?? (rollingGesture as GameGesture)}
            />
          ) : (
            <GesturePlaceholderContainer>
              <GesturePlaceholder />
            </GesturePlaceholderContainer>
          )}
        </PickContainer>
      </MainGameContainer>
      {isSM && <ResultPanel />}
    </StageContainer>
  );
};

export default ComputerChoosingStage;
