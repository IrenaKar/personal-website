import { FormEvent, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";

export const onScrollSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  headerElement: HTMLElement | null
): void => {
  e.preventDefault();
  const target = window.document.getElementById(
    e.currentTarget.href.split("#")[1]
  );
  const headerHeight = headerElement?.offsetHeight;
  if (target) {
    const targetPosition =
      target.getBoundingClientRect().top - (headerHeight ?? 0);
    const offsetPosition = targetPosition;
    window.scrollTo({
      top: window.window.scrollY + offsetPosition,
      behavior: "smooth",
    });
  }
};

export const sendEmail = (
  e: FormEvent<HTMLFormElement>,
  formRef: MutableRefObject<HTMLFormElement | null>
) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_tswo7ex",
      "template_y9vc7bj",
      formRef.current!,
      "TqqbocdrCkBv16ZzO"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  if (e.target instanceof HTMLFormElement) {
    e.target.reset();
  }
};

export const scrollToSectionHandler = (handleScroll: () => void) => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
