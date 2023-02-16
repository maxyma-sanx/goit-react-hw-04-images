import axios from 'axios';

const API_KEY = '32149017-54898b7893ffe9aab4d4c2fa3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`
  );

  return data;
};
