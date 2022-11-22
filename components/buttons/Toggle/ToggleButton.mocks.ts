import { IToggleButton } from "./ToggleButton";

const base: IToggleButton = {
  expanded: false,
  onClick: (ev) => {console.log(ev)}
};

export const mockToggleButtonProps = {
  base,
};
