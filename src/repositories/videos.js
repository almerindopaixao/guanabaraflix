import axios from '../services/axios';
import { URL_VIDEOS } from '../config/urls';

export default async function create(objetoDoVideo) {
  try {
    const respostaDoServior = await axios.post(URL_VIDEOS, objetoDoVideo);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}
