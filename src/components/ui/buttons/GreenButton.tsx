import React, { ComponentProps } from "react";
import './styles/greenButton.css';

const GreenButton = (props: ComponentProps<'button'>) => {
  const { children, className, ...rest } = props;
  return (
    <button className={`green-button ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  )
}

export default GreenButton;