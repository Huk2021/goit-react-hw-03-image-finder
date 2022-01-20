import PropTypes from "prop-types";
import {
  ImageGalleryItemList,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  alt,
  onImageClick,
}) {
  return (
    <ImageGalleryItemList>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={alt}
        onClick={() => onImageClick(largeImageURL)}
      />
    </ImageGalleryItemList>
  );
}
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
