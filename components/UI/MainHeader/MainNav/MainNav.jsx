import MainNavItem from "./MainNavItem/MainNavItem"; // <-- under construction

import classes from "./MainNav.module.css";



const MainNav = ({ isExpanded, onBackdropClick }) => {

  return (
    <>
      <div 
        className={`${classes["backdrop"]} ${isExpanded ? classes["expanded"]: ""}`} 
        onClick={onBackdropClick}
      />
      <nav 
        className={`${classes["nav-bar"]} ${isExpanded ? classes["expanded"] : ""}`}
      >
        <ul>
          {/* <MainNavItem to="/">ALL PLACES</MainNavItem> */} 
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
