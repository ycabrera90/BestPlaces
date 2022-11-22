import { IMainNavBar } from "./MainNavBar";

const base: IMainNavBar = {
  isExpanded: true,
  onBackdropClick: (ev) => {console.log(ev)},
};

export const mockMainNavBarProps = {
  base,
};
