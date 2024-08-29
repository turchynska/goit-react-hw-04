import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(61, 61, 61 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          border: "none",
          padding: "0",
          maxWidth: " 900px",
          margin: "auto",
          borderRadius: "0",
          backgroundColor: "transparent",
        },
      }}
    >
      {image && (
        <div className={css.modal}>
          <img
            className={css.img}
            src={image.urls.regular}
            alt={image.description || "Image"}
            style={{ width: " 100", height: "auto" }}
          />
          <div className={css.description}>
            <p className={css.text}>Likes: {image.likes}</p>
            <p className={css.text}>Author: {image.user.name}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal