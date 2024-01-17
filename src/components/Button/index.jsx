import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[23px]" };
const variants = {
  outline: {
    teal_900_01: "border border-solid border-teal-900_01 text-teal-900_01",
  },
  fill: {
    teal_900_01: "bg-teal-900_01 text-green-A100",
    orange_50: "bg-orange-50",
    green_A100: "bg-green-A100 text-teal-900_01",
    teal_900: "bg-teal-900",
  },
};
const sizes = { xs: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "teal_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "teal_900_01",
    "orange_50",
    "green_A100",
    "teal_900",
  ]),
};

export { Button };
