import axios from 'axios';
import { URL_BACKEND_LOCAL, URL_BACKEND_REMOTE } from '../config/urls';

export default axios.create({
  baseURL: window.location.hostname.includes('localhost')
    ? URL_BACKEND_LOCAL
    : URL_BACKEND_REMOTE,
});
