import style from './ImageCard.module.css';

const ImageCard = ({ image, onOpen }) => {
  return (
    <div className={style.card}>
      <img 
        className={style.img}
        onClick={onOpen}
        src={image.urls.small} 
        alt={image.description  || "Image description"}
      />
    </div>
  );
}

export default ImageCard