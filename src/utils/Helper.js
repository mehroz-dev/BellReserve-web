/** Formats a number with thousands separators, e.g. 18420 -> "18,420". */
export const formatNumber = (value) => {
  return Math.round(value).toLocaleString("en-US");
};

/** Pads a number to two digits, e.g. 3 -> "03". */
export const padNumber = (value) => {
  return String(value).padStart(2, "0");
};

/** Returns a CSS custom property object for an animation delay in milliseconds. */
export const delayStyle = (milliseconds) => {
  return {
    "--delay": `${milliseconds}ms`,
  };
};

/** Joins class names, skipping empty or false values. */
export const classNames = (...names) => {
  return names.filter(Boolean).join(" ");
};
