import { useState } from "react";
import styled from "styled-components";
import RulesModal from "../rules-modal/rules-modal";
import { createPortal } from "react-dom";
import { useDimensions } from "../../../hooks/useDimensionts";
import RulesDrawer from "../rules-drawer/rules-drawer";

const RulesButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: auto;

  @media screen and (max-width: 860px) {
    justify-content: center;
  }
`;

const RulesBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9em;
  height: 3em;
  font-size: 1.2em;
  text-transform: uppercase;
  border-style: solid;
  border-radius: 0.6em;
  border-color: white;
  color: white;
  background: transparent;
  letter-spacing: 2px;

  &:hover {
    border-color: white;
    opacity: 0.8;
  }

  @media screen and (max-width: 860px) {
    width: 15em;
    height: 4em;
    font-size: 1.5em;
  }
`;

const RulesButton = () => {
  const { isSM } = useDimensions();
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  return (
    <>
      <RulesButtonContainer>
        <RulesBtn onClick={() => setIsRulesModalOpen(true)}>Rules</RulesBtn>
      </RulesButtonContainer>
      {isRulesModalOpen && (
        <>
          {createPortal(
            <>
              {isSM ? (
                <RulesDrawer onClose={() => setIsRulesModalOpen(false)} />
              ) : (
                <RulesModal onClose={() => setIsRulesModalOpen(false)} />
              )}
            </>,
            document.body
          )}
        </>
      )}
    </>
  );
};

export default RulesButton;
