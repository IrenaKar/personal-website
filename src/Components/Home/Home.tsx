import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement
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

  const handleScroll = () => setOffset(window.pageYOffset - 5);

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
        <div className="min-h-[300px] sm:min-h-[210px]">
          <h1 className="max-w-[250px] sm:max-w-[100%] self-start text-6xl lg:text-8xl xl:text-9xl font-bold text-stone-400 mb-5 leading-tight md:whitespace-nowrap">
            {typingHeading}
          </h1>
          <div className={showSubHeading ? "block" : "hidden"}>
            <h2
              className={
                showSubHeading
                  ? "fade text-rose-500 text-xl sm:text-4xl xl:text-5xl float-left sm:float-right tracking-[4px] lg:tracking-[10px] whitespace-nowrap"
                  : ""
              }
            >
              <span>{subHeadingWordsGroup}</span>
            </h2>
          </div>
        </div>

        {showArrow && (
          <a href="#technologies" onClick={(e) => onScrollSection(e)}>
            <ArrowDownIcon
              className={`${
                minHeight ? "fade pointer" : "hidden"
              } animate-bounce absolute bottom-3 left-[50%] translate-x-[-50%]`}
              width={50}
              height={50}
            />
          </a>
        )}
      </>
    </Section>
  );
};

export default Home;
