import PropTypes from "prop-types";

export default function ImageGalleryItem({ src, largeImageURL, alt, onClick }) {
  return (
    <li>
      <img src={src} alt={alt} onClick={() => onClick(largeImageURL)} />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
