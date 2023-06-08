export const onScrollSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
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
