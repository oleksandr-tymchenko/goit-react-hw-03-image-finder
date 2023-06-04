import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({ imgUrl, ImgName, imgLargeUrl }) => {
  return (
    <ImgGalleryItem>
      <ImgGalleryItemImage
        src={imgUrl}
        data-large={imgLargeUrl}
        alt={ImgName}
      />
    </ImgGalleryItem>
  );
};

ImageGaleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  ImgName: PropTypes.string.isRequired,
  imgLargeUrl: PropTypes.string.isRequired,
};
