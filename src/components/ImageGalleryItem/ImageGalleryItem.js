import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: { webformatURL }, alt }) => {
  return <GalleryImage src={webformatURL} alt={alt} />;
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }),
  alt: PropTypes.string.isRequired,
};
