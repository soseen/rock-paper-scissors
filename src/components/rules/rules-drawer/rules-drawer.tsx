import styled from "styled-components";
import IconClose from "../../../images/icon-close.svg";
import RulesImg from "../../../images/image-rules-bonus.svg";
import { useEffect, useRef } from "react";

type Props = {
  onClose: () => void;
};

const Drawer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  padding-top: 6em;
  padding-bottom: 6em;
  background: white;
  z-index: 10;
  box-sizing: border-box;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  &.visible {
    transform: translateY(0);
  }

  @media screen and (max-width: 580px) {
    padding-top: 12em;
    padding-bottom: 10em;
  }
`;

const Text = styled.p`
  font-size: 5em;
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
  width: 3em;
  height: 3em;
`;

const RulesImage = styled.img`
  width: 100%;
  max-width: 390px;
  margin: 0;
`;

const RulesDrawer = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
        ref.current?.classList.add("visible");
      }, 10);
    }
  }, []);

  return (
    <Drawer ref={ref} onClick={(e) => e.stopPropagation()}>
      <Text>Rules</Text>
      <RulesImage src={RulesImg} alt="rules" />
      <IconButton onClick={onClose}>
        <Icon src={IconClose} alt="close" />
      </IconButton>
    </Drawer>
  );
};

export default RulesDrawer;
