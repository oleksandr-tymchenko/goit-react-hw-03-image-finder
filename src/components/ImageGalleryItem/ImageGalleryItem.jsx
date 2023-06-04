import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({ itemId, imgUrl, ImgName, imgLargeUrl }) => {
  return (
    <ImgGalleryItem key={itemId}>
      <ImgGalleryItemImage
        src={imgUrl}
        data-large={imgLargeUrl}
        alt={ImgName}
      />
    </ImgGalleryItem>
  );
};

ImageGaleryItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  ImgName: PropTypes.string.isRequired,
  imgLargeUrl: PropTypes.string.isRequired,
};
