import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      //   style={customStyles}
    >
      <img src={image.regularUrl} alt={image.description} />
      <p>{image.description}</p>
      <p>Author: {image.author}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
}
