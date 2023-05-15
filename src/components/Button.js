import React from "react"
import { Link } from "react-router-dom";
import "../styles/Button.css";

// todo - why is this styled like this.....fix it

const STYLES = ["btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

  return (
    <Link to="/projects" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}