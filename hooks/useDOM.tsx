// version 1.0.2
import { useEffect, useState, useCallback } from "react";

type orientationType = string | null;
type sizesType = { width: number; height: number } | null;
type useDOMType = { screen: { orientation: orientationType; size: sizesType } };

const useDOM = (): useDOMType => {
  const [orientation, setOrientation] = useState<orientationType>(null);
  const [size, setSize] = useState<sizesType>(null);

  const getOrientation: () => orientationType = useCallback(() => {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  }, []);

  const getSizes: () => sizesType = useCallback(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  useEffect(() => {
    setOrientation(getOrientation());
    setSize(getSizes());

    window.addEventListener("resize", () => {
      setOrientation(getOrientation());
      setSize(getSizes());
    });

    return () => {
      window.removeEventListener("resize", () => {
        setOrientation(getOrientation());
      });
    };
  }, []);

  return { screen: { orientation, size } };
};



export default useDOM;
