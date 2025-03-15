import React from "react";
import styled from "styled-components";
import IconClose from "../../../images/icon-close.svg";
import RulesImg from "../../../images/image-rules-bonus.svg";

type Props = {
  onClose: () => void;
};

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Modal = styled.div`
  padding: 3em;
  border-radius: 0.4em;
  background: white;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

const Text = styled.p`
  font-size: 2em;
  text-transform: uppercase;
  margin: 0;
  color: var(--dark-text);
  font-weight: 700;
`;

const IconButton = styled.button`
  background: transparent;

  &:hover {
    opacity: 0.8;
    border-color: transparent;
  }
`;

const Icon = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

const RulesImage = styled.img`
  width: auto;
  margin: auto;
`;

const RulesModal = ({ onClose }: Props) => {
  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Row>
          <Text>Rules</Text>
          <IconButton onClick={onClose}>
            <Icon src={IconClose} alt="close" />
          </IconButton>
        </Row>
        <RulesImage src={RulesImg} alt="rules" />
      </Modal>
    </Backdrop>
  );
};

export default RulesModal;
