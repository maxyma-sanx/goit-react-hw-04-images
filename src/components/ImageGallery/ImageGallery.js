import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images, query, toggle, showModal }) => {
  return (
    <>
      <GalleryList>
        {images.map((image, index) => (
          <GalleryItem key={image.id} onClick={() => toggle(index)}>
            <ImageGalleryItem image={image} alt={query} showModal={showModal} />
          </GalleryItem>
        ))}
      </GalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  query: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
