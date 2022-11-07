import { useEffect, useState } from "react";

const useDOM_helper = () => {
  const [orientation, setOrientation] = useState(null);

  const getOrientation = () => {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  };

  useEffect(() => {
    setOrientation(getOrientation());
    
    window.addEventListener("resize", () => {
      setOrientation(getOrientation());
    });
  }, []);

  return { screen: { orientation } };
};

export default useDOM_helper;
