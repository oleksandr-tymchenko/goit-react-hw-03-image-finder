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

// export const ImageGaleryItem = ({ data }) => {
//   return (
//     <ul>
//       {data.map(({ id, imgUrl }) => {
//         return (
//           <li key={id} className="gallery-item">
//             <img src={imgUrl} alt="{imgName}" width="300" />
//           </li>
//         );
//       })}
{
  /* <li key="1" className="gallery-item">
        <img src={imgUrl} alt={imgName} />
      </li>
      <li key="2" className="gallery-item">
        <img src={imgUrl} alt={imgName} />
      </li>
      <li key="3" className="gallery-item">
        <img src={imgUrl} alt={imgName} />
      </li> */
}
//     </ul>
//   );
// };
ImageGaleryItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  ImgName: PropTypes.string.isRequired,
  imgLargeUrl: PropTypes.string.isRequired,
};
