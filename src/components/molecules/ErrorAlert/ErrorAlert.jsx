import "./ErrorAlert.css";
import React from "react";

import Button from "../../atoms/Button/Button";
import useGoBack from "../../../hooks/useGoBack";

const ErrorAlert = ({ text }) => {
  const goBack = useGoBack();

  return (
    <article className="error-alert page-enter-animation">
      <p className="error-alert-description">{text}</p>
      <Button
        className="secondary error-alert-button"
        onClick={() => goBack()}
        icon={"← "}
        text={"Atrás"}
      ></Button>
    </article>
  );
};

export default ErrorAlert;
