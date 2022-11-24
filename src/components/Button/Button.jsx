import React from "react";
import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";

import styles from "./ButtonStyles";

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = "contained",
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <MuiButton
      type="button"
      variant={variant}
      size={size}
      style={backgroundColor && { backgroundColor }}
      sx={styles.root}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
