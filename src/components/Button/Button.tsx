import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="custom-btn btn-1">{props.label}</button>;
};

export default Button;