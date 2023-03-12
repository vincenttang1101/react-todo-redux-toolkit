export function getClasses(classes) {
  return classes
    .filter((item) => item !== "")
    .join(" ")
    .trim();
}
