import { FC, ReactNode } from "react";
import backgroundPlaces from "../../../store/backgroundData";
import MetaHeader from "../../headers/Meta/MetaHeader";
import MainHeader from "../../headers/Main/MainHeader";
import ImageMotion from "../../backdrops/ImageMotion/ImageMotion";
import classes from "./MainLayout.module.css";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pageTitle = "Best Places";
const pageDescription = "Look at the best places in the world";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MetaHeader title={pageTitle} description={pageDescription} />
      <MainHeader />
      <ImageMotion images={backgroundPlaces} />
      {/* <BackgroundImages images={backgroundPlaces} /> */}
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayout;
