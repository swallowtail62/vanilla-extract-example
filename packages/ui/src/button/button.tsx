import React from "react";
import { buttonStyle } from "./button.css";

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return <button className={buttonStyle}>{children}</button>;
}

export { Button };
