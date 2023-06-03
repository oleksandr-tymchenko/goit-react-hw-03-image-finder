import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { getImages } from 'servises/api';
import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'regected',
};

export default class ImageGalery extends Component {
  state = {
    images: [],
    status: STATUS.IDLE,
    error: null,
    page: 1,
    totalPages: 0,
    per_page: 12,
    showModal: false,
    imageURL: '',
  };

  componentDidMount() {
    // this.fetchImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { page } = this.state;
    if (prevProps.searchQuery !== searchQuery) {
      await this.setState({ page: 1, images: [] });
      this.fetchImages();
    }
    if (prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery } = this.props;
    const { images, per_page, page } = this.state;
    await this.setState({ status: STATUS.PENDING });
    try {
      const data = await getImages({ searchQuery, page });

      const newImages = data.hits;
      if (!newImages.length) {
        throw new Error('No matches found');
      }
      this.setState(state => ({
        images: [...images, ...newImages],
        totalPages: Math.ceil(data.total / per_page),
        status: STATUS.RESOLVED,
        error: null,
      }));
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  showLargeImage = async e => {
    if (!this.state.showModal) {
      const url = await e.target.dataset.large;
      await this.setState({
        imageURL: url,
      });
      this.toggleModal();
    }
  };

  render() {
    const { status, images, error, page, totalPages, showModal, imageURL } =
      this.state;
    const showLoadMoreBtn = images.length !== 0 && page < totalPages;

    if (status === STATUS.PENDING) {
      return <Skeleton />;
    }
    if (status === STATUS.RESOLVED) {
      return (
        <>
          <ImgGallery onClick={this.showLargeImage}>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src={imageURL} alt="largeImg" />
              </Modal>
            )}
            {images.map(({ id, webformatURL, tags, largeImageURL }, index) => {
              return (
                <div key={index}>
                  <ImageGaleryItem
                    // onClick={() => console.log('hi')}
                    itemId={id}
                    imgUrl={webformatURL}
                    imgLargeUrl={largeImageURL}
                    ImgName={tags}
                  />
                </div>
              );
            })}
          </ImgGallery>
          {showLoadMoreBtn && (
            <Button
              stateStatus={status}
              mashineStatus={STATUS}
              loadingMore={this.handleLoadMore}
            />
          )}
        </>
      );
    }

    if (status === STATUS.REJECTED) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
  }
}

ImageGalery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      searchQuery: PropTypes.string.isRequired,
      page: PropTypes.number.isRequired,
    })
  ).isRequired,
};
