import { useEffect, useState, useCallback } from "react";

type sizesType = { width: number; height: number };
type useDOMType = { screen: { orientation: string; size: sizesType }};



const useDOM_helper = (): useDOMType => {
  const [orientation, setOrientation] = useState<string | null>(null);
  const [size, setSize] = useState<sizesType | null>(null);

  const getOrientation: () => string = useCallback(() => {
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
    });

    return () => {
      window.removeEventListener("resize", () => {
        setOrientation(getOrientation());
      });
    };
  }, []);

  return { screen: { orientation, size } };
};



export default useDOM_helper;
