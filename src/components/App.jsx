import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery';
import { Wrapper } from './Wrapper';
import { Searchbar } from './Searchbar';
import { Button } from './Button';
import { Loader } from './Loader';
import { settings } from 'utils/notifySettings';
import { getImages } from 'services/pixabayAPI';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    page: 1,
    sb: null,
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    currentIdx: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (prevQuery !== query || prevPage !== page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await getImages(query, page);
        this.setState({
          sb: page < Math.ceil(totalHits / 12),
          images: [...images, ...hits],
        });
      } catch (e) {
        toast.error(
          `Something is wrong, try to reload page! Error: ${e.message}`,
          settings
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ page: 1, sb: null, query, images: [] });
  };

  toggleModal = id => {
    this.setState({ showModal: !this.state.showModal, currentIdx: id });
  };

  closeModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, query, showModal, currentIdx, isLoading, sb } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <Wrapper>
          <ImageGallery
            images={images}
            query={query}
            toggle={this.toggleModal}
            showModal={showModal}
            currentIdx={currentIdx}
          />

          <Loader loading={isLoading} />

          {sb && <Button loadMore={this.loadMore} />}
        </Wrapper>

        {showModal && (
          <Modal
            image={images[currentIdx]}
            alt={query}
            onClose={this.closeModal}
          />
        )}

        <GlobalStyle />
        <ToastContainer />
      </>
    );
  }
}
