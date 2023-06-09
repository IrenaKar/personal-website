import { FormEvent, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";

export const onScrollSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): void => {
  e.preventDefault();
  const target = window.document.getElementById(
    e.currentTarget.href.split("#")[1]
  );
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + 5;
    const offsetPosition = targetPosition;
    window.scrollTo({
      top: window.pageYOffset + offsetPosition,
      behavior: "smooth"
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
