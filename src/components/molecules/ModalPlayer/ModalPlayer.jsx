import "./ModalPlayer.css";

import { useModalPlayer } from "../../../contexts/ModalPlayerContext";
import Button from "../../atoms/Button/Button";
import StepBar from "../../atoms/StepBar/StepBar";

const ModalPlayer = () => {
  const { isOpen, closeModal, song } = useModalPlayer();

  if (!isOpen) return null;

  return (
    <div className="modal-player-overlay" onClick={closeModal}>
      <div className="modal-player" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="100%"
          height="390"
          src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="buttons-modal-player-container">
          <StepBar className={"stepbar-modal-player"}>
            {song.name} | {song.artist} | {song.name} | {song.artist} |{" "}
            {song.name} | {song.artist} | {song.name} | {song.artist} |{" "}
            {song.name} | {song.artist} | {song.name} | {song.artist} |{" "}
            {song.name} | {song.artist} | {song.name} | {song.artist} |{" "}
            {song.name} | {song.artist} | {song.name} | {song.artist} |
          </StepBar>
          <Button
            className="modal-player-button-close secondary"
            onClick={closeModal}
            text={"Cerrar"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ModalPlayer;
