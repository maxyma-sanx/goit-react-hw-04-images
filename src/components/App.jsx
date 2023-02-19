import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery';
import { Wrapper } from './Wrapper';
import { Searchbar } from './Searchbar';
import { Button } from './Button';
import { Loader } from './Loader';
import { settings } from 'utils/notifySettings';
import { fetchImages } from 'services/pixabayAPI';
import { Modal } from './Modal';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const { hits, totalHits } = await fetchImages(query, page);
        setShowButton(page < Math.ceil(totalHits / 12));
        setImages(prevImages => [...prevImages, ...hits]);
      } catch (e) {
        toast.error(
          `Something is wrong, try to reload page! Error: ${e.message}`,
          settings
        );
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleFormSubmit = query => {
    setPage(1);
    setShowButton(null);
    setQuery(query);
    setImages([]);
  };

  const toggleModal = id => {
    setShowModal(prevState => !prevState);
    setCurrentIdx(id);
  };

  const closeModal = () => {
    setShowModal(prevState => !prevState);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      <Wrapper>
        <ImageGallery
          images={images}
          query={query}
          toggle={toggleModal}
          showModal={showModal}
          currentIdx={currentIdx}
        />

        <Loader loading={isLoading} />

        {showButton && <Button loadMore={loadMore} />}
      </Wrapper>

      {showModal && (
        <Modal image={images[currentIdx]} alt={query} onClose={closeModal} />
      )}

      <GlobalStyle />
      <ToastContainer />
    </>
  );
};
