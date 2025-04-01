import "./Dialog.css";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { useMood } from "../../../contexts/MoodContext";
import Button from "../../atoms/Button/Button";
import { types } from "../../../reducers/mood.reducer";

const Dialog = forwardRef((_, ref) => {
  const dialogRef = useRef(null);
  const { dispatch } = useMood();

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
    close: () => dialogRef.current.close()
  }));

  return (
    <dialog className="dialog-favourites" ref={dialogRef}>
      <form className="dialog-favourites-form" method="dialog">
        <p>¿Estás seguro de que quieres eliminar todos los favoritos?</p>
        <div className="dialog-favourites-buttons">
          <Button
            text="Cancelar"
            className="dialog-button secondary"
            onClick={() => dialogRef.current.close()}
          />
          <Button
            className="dialog-button tertiary "
            text="Confirmar"
            onClick={() => {
              dispatch({ type: types.CLEAR_FAVOURITES });
              dialogRef.current.close();
            }}
          />
        </div>
      </form>
    </dialog>
  );
});

export default Dialog;
