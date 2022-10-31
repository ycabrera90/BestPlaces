import Link from "next/link";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Best Places</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Places</Link>
          </li>
          <li>
            <Link href="/new-place">Add New Place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
