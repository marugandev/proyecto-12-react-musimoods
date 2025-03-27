import "./NotFound.css";
import React from "react";

import useGoBack from "../../hooks/useGoBack";
import Button from "../../components/atoms/Button/Button";

const NotFound = () => {
  const goBack = useGoBack();

  return (
    <div className="not-found page-enter-animation">
      <h2 className="not-found-title">Error 404</h2>
      <h2 className="not-found-subtitle">Página no encontrada</h2>
      <Button
        className="secondary not-found-button"
        onClick={() => goBack()}
        icon={"← "}
        text={"Atrás"}
      ></Button>
    </div>
  );
};

export default NotFound;
