import React, { FunctionComponent } from "react";
import { BurgerMenuProps } from "./BurgerMenu.types";

const BurgerMenu: FunctionComponent<BurgerMenuProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-1 h-4 w-8 mt-5 mr-5 md:hidden fixed right-0"
    >
      <span className="border-2 bg-stone-400 border-stone-400 w-full rounded"></span>
      <span className="border-2 bg-stone-400 border-stone-400 w-full rounded"></span>
      <span className="border-2 bg-stone-400 border-stone-400 w-full rounded"></span>
    </div>
  );
};

export default BurgerMenu;
