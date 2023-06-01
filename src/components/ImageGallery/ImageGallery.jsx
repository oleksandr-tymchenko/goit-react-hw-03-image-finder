import React, { Component } from 'react';
import Skeleton from 'components/Skeleton/Skeleton';
import { getImages } from 'servises/api';
import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

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

  async componentDidMount() {
    const data = await getImages();
    const images = data.hits;

    await this.setState({ images, isLoading: false });
    console.log(this.state);
  }
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

  render() {
    const { images } = this.state;
    return (
      <ul className="gallery">
        {images.map(({ id, webformatURL }) => {
          return (
            <ImageGaleryItem
              itemId={id}
              imgUrl={webformatURL}
              ImgName="{tag}"
            />
          );
        })}
      </ul>
    );
  }
}
