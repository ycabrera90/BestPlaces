import MainHeader from "../MainHeader/MainHeader";
import classes from "./MainLayout.module.css";

function MainLayout(props) {
  return (
    <div>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default MainLayout;
