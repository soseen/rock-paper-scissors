import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

const ShadowRoot = ({ children }: Props) => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (hostRef.current && !shadowRef.current) {
      shadowRef.current = hostRef.current.attachShadow({ mode: "open" });
    }
  }, []);

  return hostRef.current && shadowRef.current ? (
    ReactDOM.createPortal(children, shadowRef.current)
  ) : (
    <div ref={hostRef} />
  );
};

export default ShadowRoot;
