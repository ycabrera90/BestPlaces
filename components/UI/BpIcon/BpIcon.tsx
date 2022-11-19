import Image from "next/image";
import classes from "./BpIcon.module.css";



const BpIcon = () => {
  return (
    <i className={classes["bp-icon"]}>
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
