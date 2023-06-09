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

const Home: FunctionComponent<HomeProps> = ({ sectionRef }): ReactElement => {
  const typingHeading = useTypingEffect(headingWordsGroup);

  const [minHeight, setMinHeight] = useState(false);
  const [showSubHeading, setShowSubHeading] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [offset, setOffset] = useState(5);

  const handleScroll = () => setOffset(window.pageYOffset - 5);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
  }, 3000);

  setTimeout(() => {
    setShowArrow(true);
  }, 4000);

  function handleBackClick() {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Section
      id="home"
      className="flex items-center justify-start sm:justify-center min-h-[100vh]"
    >
      <>
        <div className="min-h-[300px] sm:min-h-[210px]">
          <h1 className="max-w-[300px] sm:max-w-[100%] self-start text-7xl lg:text-8xl xl:text-9xl font-bold text-stone-400 mb-5 leading-tight md:whitespace-nowrap">
            {typingHeading}
          </h1>
          <div className={showSubHeading ? "block" : "hidden"}>
            <h2
              className={
                showSubHeading
                  ? "fade text-rose-500 text-xl sm:text-4xl xl:text-5xl float-left sm:float-right tracking-[6px] lg:tracking-[10px]"
                  : ""
              }
            >
              <span>{subHeadingWordsGroup}</span>
            </h2>
          </div>
        </div>

        {showArrow && (
          <button
            className={minHeight ? "fade pointer" : "hidden"}
            onClick={handleBackClick}
          >
            <ArrowDownIcon
              className="animate-bounce absolute bottom-3 left-[50%] translate-x-[-50%]"
              width={50}
              height={50}
            />
          </button>
        )}
      </>
    </Section>
  );
};

export default Home;
