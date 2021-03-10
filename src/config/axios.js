import axios from 'axios';

const REQUEST_TIME_OUT_SECONDS = 30;

const BASE_URL_FOR_TESTING = 'https://jsonplaceholder.typicode.com/';

const apiRequest = axios.create({
  baseURL: BASE_URL_FOR_TESTING,
  timeout: REQUEST_TIME_OUT_SECONDS * 1000,
});

export default apiRequest;
