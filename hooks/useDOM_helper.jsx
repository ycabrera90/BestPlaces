import { useEffect, useState } from "react";

const useDOM_helper = () => {
  const [orientation, setOrientation] = useState(null);
  const [size, setSize] = useState(null);

  const getOrientation = () => {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  };

  const getSizes = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  useEffect(() => {
    setOrientation(getOrientation());
    setSize(getSizes());

    window.addEventListener("resize", () => {
      setOrientation(getOrientation());
    });
  }, []);

  return { screen: { orientation, size } };
};

export default useDOM_helper;
