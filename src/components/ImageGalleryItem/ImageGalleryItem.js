import PropTypes from "prop-types";
import {
  ImageGalleryItemList,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ src, largeImageURL, alt, onClick }) {
  return (
    <ImageGalleryItemList>
      <ImageGalleryItemImage
        src={src}
        alt={alt}
        onClick={() => onClick(largeImageURL)}
      />
    </ImageGalleryItemList>
  );
}
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
