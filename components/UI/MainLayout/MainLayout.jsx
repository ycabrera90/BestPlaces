import MainHeader from "../MainHeader/MainHeader";
import classes from "./MainLayout.module.css";

function MainLayout(props) {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default MainLayout;
