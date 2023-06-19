import { useEffect, useState } from "react";

const useTypingEffect = (firstWordsGroup: string[]): string => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

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
  }, [subIndex, index, reverse, firstWordsGroup]);

  const typing = firstWordsGroup[index].substring(0, subIndex);

  return typing;
};

export default useTypingEffect;
