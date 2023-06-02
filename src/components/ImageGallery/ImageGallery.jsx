import React, { Component } from 'react';
import Skeleton from 'components/Skeleton/Skeleton';
import { getImages } from 'servises/api';
import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImgGallery } from './ImageGallery.styled';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
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
  };

  componentDidMount() {
    this.fetchImages();
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
    console.log('searchQuery in img', searchQuery);
    const { images, per_page, page } = this.state;
    await this.setState({ status: STATUS.PENDING });
    try {
      const data = await getImages({ searchQuery, page });
      console.log('data', data);
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

  // addImages = async values => {
  //   try {
  //     const newData = await getImages(values);
  //     const NewImages = newData.hits;
  //     this.setState(state => ({
  //       images: [...state.images, ...NewImages],
  //     }));
  //   } catch (error) {
  //     this.setState({ error: true, isLoading: false });

  //     console.log(error);
  //   }
  // };

  //   componentDiddMount() {
  //     this.fetchImages();
  //   }

  //   fetchImages = async () => {
  //     await console.log(getImages);
  //     const { images, per_page, page } = this.state;
  //     const { q } = this.props;
  //     console.log(this.props);
  //     await this.setState({ status: STATUS.PENDING });
  //     const data = await getImages({
  //       q,
  //       per_page,
  //       page,
  //     });

  //     this.setState({
  //       images: [...images, ...data.images],
  //       totalPages: Math.ceil(data.totalHits / per_page),
  //       status: STATUS.RESOLVED,
  //       error: null,
  //     });
  //   };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('this.state', this.state);
  };

  render() {
    const { status, images, error, page, totalPages } = this.state;
    const showLoadMoreBtn = images.length !== 0 && page < totalPages;

    if (status === STATUS.PENDING) {
      return <Skeleton />;
    }
    if (status === STATUS.RESOLVED) {
      return (
        <ImgGallery>
          {images.map(({ id, webformatURL }) => {
            return (
              <ImageGaleryItem
                itemId={id}
                imgUrl={webformatURL}
                ImgName="{tag}"
              />
            );
          })}

          {showLoadMoreBtn && (
            <button
              onClick={this.handleLoadMore}
              disabled={status === STATUS.PENDING ? true : false}
            >
              {status === STATUS.PENDING ? 'Loading...' : 'Load More'}
            </button>
          )}
        </ImgGallery>
      );
    }

    if (status === STATUS.REJECTED) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
  }
}
