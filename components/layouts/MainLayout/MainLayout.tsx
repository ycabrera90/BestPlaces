import { FC, ReactNode } from "react";
import backgroundPlaces from "../../../store/backgroundData";
import ImageMotion from "../../backdrops/ImageMotion/ImageMotion";
import MainHeader from "../../headers/Main/MainHeader";
import MetaHeader from "../../headers/Meta/MetaHeader";
import styles from "./MainLayout.module.css";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pageTitle = "Best Places";
const pageDescription = "Look at the best places in the world";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export interface IMainLayout {
  children?: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <MetaHeader title={pageTitle} description={pageDescription} />
      <MainHeader />
      <ImageMotion images={backgroundPlaces} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
