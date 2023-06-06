import React, { useState, useRef, useEffect, FunctionComponent } from "react";
import Section from "../Section/Section";
import { ArrowDownIcon } from "../../assets/index";
import { firstWordsGroup, secondWordsGroup } from "./Home.data";
import { HomeProps } from "./Home.type";

const Home:FunctionComponent<HomeProps> = ({sectionRef}) => {
  const [minHeight, setMinHeight] = useState(false);
  const [showSecondWords, setShowSecondWords] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

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

  useEffect(() => {
    if (
      index === firstWordsGroup.length - 1 &&
      subIndex === firstWordsGroup[index].length
    ) {
      return;
    }
    if (
      subIndex === firstWordsGroup[index].length + 1 &&
      index !== firstWordsGroup.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === firstWordsGroup[index].length ? 1000 : 150, Math.random() * 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  setTimeout(() => {
    setShowSecondWords(true);
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
    <Section id="home" className="flex items-center justify-start sm:justify-center min-h-[100vh]">
      <>
        <div className="min-h-[300px] sm:min-h-[210px]">
          <h1 className="max-w-[300px] sm:max-w-[100%] self-start text-7xl lg:text-8xl xl:text-9xl font-bold text-stone-400 mb-5 leading-tight">{`${firstWordsGroup[
            index
          ].substring(0, subIndex)}`}</h1>
          <div className={showSecondWords ? "block" : "hidden"}>
            <h2
              className={
                showSecondWords
                  ? "fade text-rose-500 text-xl sm:text-4xl xl:text-5xl float-left sm:float-right tracking-[6px] lg:tracking-[10px]"
                  : ""
              }
            >
              <span>{secondWordsGroup}</span>
            </h2>
          </div>
        </div>

        {showArrow && (
          <button
            className={minHeight ? "fade pointer" : "hidden"}
            onClick={handleBackClick}
          >
            <ArrowDownIcon
              className="animate-bounce absolute bottom-3 left-[50%]"
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