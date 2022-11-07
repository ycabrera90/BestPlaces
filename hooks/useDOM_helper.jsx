import { useEffect, useState } from "react";

const useDOM_helper = () => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setOrientation(
        window.innerWidth > window.innerHeight ? "landscape" : "portrait"
      );
    });
  }, []);

  return { screen: { orientation } };
};

export default useDOM_helper;
