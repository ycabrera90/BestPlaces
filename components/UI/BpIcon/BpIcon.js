import classes from "./BpIcon.module.css";
import Image from "next/image";

const BpIcon = () => {
  return (
    <i className={classes["bp-icon"]}>
      {/* <img src="/favicon.ico" alt='Best Place'/> */}
      <Image
        src="/favicon.ico"
        alt="Best Place"
        width={50}
        height={50}
        style={{
          width: "2.5rem",
          height: "2.5rem",
        }}
        sizes="2.5rem"
      />
      <h1>PLACES</h1>
    </i>
  );
};

export default BpIcon;
