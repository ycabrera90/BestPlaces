import { FC, MouseEventHandler } from "react";
import Link from "next/link";
import styles from "./MainNavBar.module.css";

export interface IMainNavBar {
  isExpanded: boolean;
  onBackdropClick: MouseEventHandler;
}

const MainNavBar: FC<IMainNavBar> = ({ isExpanded, onBackdropClick }) => {
  const mode = isExpanded ? styles["expanded"] : "";

  return (
    <>
      <div
        className={[styles["backdrop"], mode].join(" ")}
        onClick={onBackdropClick}
      />
      <nav className={[styles["nav-bar"], mode].join(" ")}>
        <ul>
          <li className={styles["main-nav_item"]}>
            <Link href="/">ALL PLACES</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavBar;
