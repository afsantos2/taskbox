import React from "react";
import  PropTypes  from "prop-types";

export default function Button({ label }) {
  return (
    <button>{label}</button>
  )
}

Button.defaultProps = {
  label: 'Valor Padrão'
}