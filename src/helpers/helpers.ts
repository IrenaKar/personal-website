export const onScrollSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  const target = window.document.getElementById(
    e.currentTarget.href.split("#")[1]
  );
  if (target) {
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition - 68;
    window.scrollTo({
      top: window.pageYOffset + offsetPosition,
      behavior: "smooth"
    });
  }
};
