import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement,
} from "react";
import BurgerMenu from "../BurgerIcon/BurgerIcon";
import { navigationLinksData } from "./Header.data";
import useScrollSpy from "../../hooks/useScrollSpy";
import { onScrollSection, scrollToSectionHandler } from "../../helpers/helpers";

const Header: FunctionComponent = (): ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const defaultSectionId = "home";
  const sections = document.querySelectorAll("section");

  const headerElement: HTMLElement | null = document.getElementById("header");
  const activeSection = useScrollSpy(sections, defaultSectionId, headerElement);

  const showBUrgerMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const changeNavBg = () => {
    window.scrollY >= 100 ? setScrollPosition(true) : setScrollPosition(false);
  };

  useEffect(() => {
    scrollToSectionHandler(changeNavBg);
  }, []);

  return (
    <div id="header" className="h-[72px]">
      <div
        className={`${mobileMenuActive ? "flex flex-col bg-white" : "hidden"} ${
          scrollPosition ? "bg-white shadow-md" : "bg-stone-50"
        } z-10 fixed md:flex w-[100vw] h-[100vh] md:h-fit p-5`}
      >
        {mobileMenuActive && (
          <div
            className="flex flex-col gap-1 h-4 w-8 relative mt-2 md:hidden"
            onClick={() => {
              setMobileMenuActive(false);
            }}
          >
            <span className="border-2 bg-gray-400 border-gray-400 w-full rounded rotate-45 absolute"></span>
            <span className="border-2 bg-gray-400 border-gray-400 w-full rounded -rotate-45 absolute"></span>
          </div>
        )}
        <ul className="flex flex-col gap-5 md:flex-row md:gap-16 md:pl-0 md:mx-auto mt-10 md:mt-0">
          {navigationLinksData.map((navLink, index) => (
            <li key={index}>
              <a
                data-to-scrollspy-id={navLink}
                className={`${
                  activeSection === navLink
                    ? "text-orange-600"
                    : "text-gray-400"
                }  font-bold py-1 text-lg sm:text-base block relative tracking-[2px] whitespace-nowrap`}
                href={`#${navLink}`}
                onClick={(e) => {
                  setMobileMenuActive(false);
                  onScrollSection(e, headerElement);
                }}
              >
                {navLink === "about-me" ? navLink.replace(/-/g, " ") : navLink}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {!mobileMenuActive && (
        <div className="w-full h-[55px] bg-white z-20 fixed md:hidden">
          <BurgerMenu onClick={showBUrgerMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
