import React, { FunctionComponent, ReactElement } from "react";
import { BurgerMenuProps } from "./BurgerIcon.types";

const BurgerMenu: FunctionComponent<BurgerMenuProps> = ({
  onClick
}): ReactElement => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-1 h-4 w-8 mt-5 ml-5 md:hidden fixed left-0"
    >
      <span className="border-2 bg-gray-400 border-gray-400 w-full rounded"></span>
      <span className="border-2 bg-gray-400 border-gray-400 w-full rounded"></span>
      <span className="border-2 bg-gray-400 border-gray-400 w-full rounded"></span>
    </div>
  );
};

export default BurgerMenu;
