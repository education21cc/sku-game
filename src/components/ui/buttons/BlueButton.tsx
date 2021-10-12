import React, { ComponentProps } from "react";
import './styles/blueButton.css';

const BlueButton = (props: ComponentProps<'button'>) => {
  const { children, className, ...rest } = props;
  return (
    <button className={`blue-button ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  )
}

export default BlueButton;