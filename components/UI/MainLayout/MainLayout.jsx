import backgroundPlaces from "../../../store/backgroundData";

import MainHeader from "../MainHeader/MainHeader";
import BackgroundImages from "../BackgroundImages/BackgroundImages";
import PageHeaders from "../PageHeaders/PageHeaders";

import classes from "./MainLayout.module.css";



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pageTitle = "Best Places";
const pageDescription = "Look at the best places in the world";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function MainLayout({ children }) {
  return (
    <>
      <PageHeaders title={pageTitle} description={pageDescription} />
      <MainHeader />
      <BackgroundImages images={backgroundPlaces} />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default MainLayout;
