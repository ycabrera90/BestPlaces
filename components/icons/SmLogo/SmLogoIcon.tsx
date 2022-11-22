import { FC } from "react";
import Image from "next/image";
import styles from "./SmLogoIcon.module.css";

export interface ISmLogoIcon {
  description?: string;
}

const SmLogoIcon: FC<ISmLogoIcon> = ({ description }) => {
  return (
    <i className={styles["bp-icon"]}>
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
      {description && <h1>{description}</h1>}
    </i>
  );
};

export default SmLogoIcon;
