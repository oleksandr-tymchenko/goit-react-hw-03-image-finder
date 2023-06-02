import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({ itemId, imgUrl }) => {
  return (
    <ImgGalleryItem key={itemId} className="gallery-item">
      <ImgGalleryItemImage src={imgUrl} alt="{imgName}" />
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
