import React, { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { navigationLinksData } from "./Header.data";
import useScrollSpy from "../../hooks/useScrollSpy";
import { onScrollSection } from "../../helpers/helpers";

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const sections = document.querySelectorAll("section");
  const activeSection = useScrollSpy(sections);

  const showBUrgerMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const changeNavBg = () => {
    window.scrollY >= 100 ? setScrollPosition(true) : setScrollPosition(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div>
      <div
        className={`${mobileMenuActive ? "flex bg-white" : "hidden"} ${
          scrollPosition ? "bg-white" : "bg-stone-50"
        } z-10 fixed md:flex w-[100vw] h-[100vh] md:h-fit justify-between p-5`}
      >
        <ul className="flex flex-col gap-5 md:flex-row md:gap-16 md:pl-0 md:mx-auto mt-10 md:mt-0">
          {navigationLinksData.map((navLink) => (
            <li>
              <a
                data-to-scrollspy-id={navLink}
                className={`${
                  activeSection === navLink ? "text-rose-500" : "text-stone-400"
                }  font-bold py-1 px-0 decoration-0 text-lg block relative tracking-[2px] whitespace-nowrap`}
                href={`#${navLink}`}
                onClick={(e) => {
                  setMobileMenuActive(false);
                  onScrollSection(e);
                }}
              >
                {navLink}
              </a>
            </li>
          ))}
        </ul>
        {mobileMenuActive && (
          <div
            className="flex flex-col gap-1 h-4 w-8 relative mt-2 md:hidden"
            onClick={() => {
              setMobileMenuActive(false);
            }}
          >
            <span className="border-2 bg-stone-400 border-stone-400 w-full rounded rotate-45 absolute"></span>
            <span className="border-2 bg-stone-400 border-stone-400 w-full rounded -rotate-45 absolute"></span>
          </div>
        )}
      </div>

      {!mobileMenuActive && (
        <div className="w-full h-[50px] bg-white z-20 fixed md:hidden">
          <BurgerMenu onClick={showBUrgerMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
