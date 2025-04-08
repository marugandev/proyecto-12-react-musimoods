import { createContext, useState, useContext } from "react";

const ModalPlayerContext = createContext();

export const ModalPlayerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [song, setSong] = useState(null);

  const openModal = (songData) => {
    setIsOpen(true);
    setSong(songData);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSong(null);
  };

  return (
    <ModalPlayerContext.Provider
      value={{ isOpen, song, openModal, closeModal }}
    >
      {children}
    </ModalPlayerContext.Provider>
  );
};

export const useModalPlayer = () => useContext(ModalPlayerContext);
