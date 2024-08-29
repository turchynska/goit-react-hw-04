 import css from "./ImageCard.module.css"
 
 
 
 const ImageCard = ({image, onOpen}) => {
    return(
<div  className={css.container} onClick={onOpen}>
  <img 
  className={css.image}
  src={image.urls.small} 
  alt={image.description}
   />
</div>
    )
 }
 export default ImageCard