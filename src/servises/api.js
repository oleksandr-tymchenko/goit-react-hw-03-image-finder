// import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '34527862-993120beb94eb9a2ced5c8bcb';
const BASE_URL = 'https://pixabay.com/api/';
// const queryParams = {
//   q: '',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
//   safesearch: true,
//   page: null,
// };

// export default class GetImages extends Component {
//   state = {
//     q: 'erotic',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//     safesearch: true,
//     page: 2,
//   };
//   async fetchImg() {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         ...this.state,
//         key: API_KEY,
//       },
//     });
//     const data = await response.data;
//     return data;
//   }
// }
export const getImages = async ({ searchQuery, newPage }) => {
  const queryParams = {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    safesearch: true,
    page: 1,
  };
  const query = Object.values({ searchQuery })[0];
  queryParams.q = query;
  queryParams.page = { newPage };
  console.log('queryParams', queryParams);
  const response = await axios.get(BASE_URL, {
    params: {
      ...queryParams,
      key: API_KEY,
    },
  });
  // if (!response.ok) {
  //   throw new Error('Smth went catch');
  // }
  return await response.data;
  // return data;
};
