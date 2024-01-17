import React from "react";

const sizeClasses = {
  txtInterRegular1891: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterExtraBold5918: "font-extrabold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterExtraBold593: "font-extrabold font-inter",
  txtInterRegular1953: "font-inter font-normal",
  txtInterSemiBold3696: "font-inter font-semibold",
  txtInterSemiBold3533: "font-inter font-semibold",
  txtInterRegular20Orange50: "font-inter font-normal",
  txtInterExtraBold5965: "font-extrabold font-inter",
  txtInterExtraBold5801: "font-extrabold font-inter",
  txtInterExtraBold5988: "font-extrabold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold38: "font-inter font-semibold",
  txtInterExtraBold566: "font-extrabold font-inter",
  txtInterExtraBold5848: "font-extrabold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular1969: "font-inter font-normal",
  txtInterExtraBold5906: "font-extrabold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterSemiBold1588: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular1389: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
