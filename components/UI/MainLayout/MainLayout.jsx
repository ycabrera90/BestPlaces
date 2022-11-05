import MainHeader from "../MainHeader/MainHeader";
import BackgroundImages from "../BackgroundImages/BackgroundImages";
import classes from "./MainLayout.module.css";

function MainLayout({ backgroundImages, children }) {
  return (
    <>
      <MainHeader />
      <BackgroundImages images={backgroundImages} />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default MainLayout;
