import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement,
} from "react";
import Section from "../Section/Section";
import { ArrowDownIcon } from "../../assets/index";
import { headingWordsGroup, subHeadingWordsGroup } from "./Home.data";
import { HomeProps } from "./Home.type";
import useTypingEffect from "../../hooks/useTypingEffect";
import { onScrollSection, scrollToSectionHandler } from "../../helpers/helpers";

const Home: FunctionComponent<HomeProps> = (): ReactElement => {
  const typingHeading = useTypingEffect(headingWordsGroup);

  const [minHeight, setMinHeight] = useState(false);
  const [showSubHeading, setShowSubHeading] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [offset, setOffset] = useState(5);
  const headerElement: HTMLElement | null = document.getElementById("header");
  const headerHeight = headerElement?.offsetHeight;

  const handleScroll = () => setOffset(window.scrollY - (headerHeight ?? 0));

  useEffect(() => {
    scrollToSectionHandler(handleScroll);
  }, []);

  useEffect(() => {
    if (offset < 300) {
      setMinHeight(true);
    } else {
      setMinHeight(false);
    }
  }, [offset]);

  setTimeout(() => {
    setShowSubHeading(true);
    setTimeout(() => {
      setShowArrow(true);
    }, 1000);
  }, 3000);

  return (
    <Section
      id="home"
      className="flex items-center justify-start sm:justify-center min-h-[100vh]"
    >
      <>
        <div className="min-h-[250px] sm:min-h-[210px]">
          <h1 className="max-w-[270px] sm:max-w-[100%] self-start text-6xl lg:text-8xl xl:text-9xl font-bold text-gray-600 mb-5 leading-tight md:whitespace-nowrap">
            {typingHeading}
          </h1>
          <div className={showSubHeading ? "block" : "hidden"}>
            <h2
              className={
                showSubHeading
                  ? "fade text-orange-600 text-xl lg:text-5xl float-left sm:float-right tracking-[4px] lg:tracking-[10px] whitespace-nowrap"
                  : ""
              }
            >
              <span>{subHeadingWordsGroup}</span>
            </h2>
          </div>
        </div>

        {showArrow && (
          <a
            href="#about-me"
            onClick={(e) => onScrollSection(e, headerElement)}
          >
            <ArrowDownIcon
              className={`${
                minHeight ? "fade pointer" : "hidden"
              } animate-bounce absolute bottom-10 md:bottom-20 left-[50%] translate-x-[-50%]`}
              width={40}
              height={40}
            />
          </a>
        )}
      </>
    </Section>
  );
};

export default Home;
