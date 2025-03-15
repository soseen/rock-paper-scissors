import { useState, useEffect, useMemo } from "react";

export const useDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSM = useMemo(() => width < 860, [width]);
  return { isSM };
};
