import axios from '../services/axios';
import { URL_CATEGORIES } from '../config/urls';

export default async function getAllWithVideos() {
  try {
    const respostaDoServior = await axios(`${URL_CATEGORIES}?_embed=videos`);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function Patch(id, categoria) {
  try {
    const respostaDoServior = await axios.patch(
      `${URL_CATEGORIES}/${id}`,
      categoria
    );
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function deleteOne(id) {
  try {
    const respostaDoServior = await axios.delete(`${URL_CATEGORIES}/${id}`);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi deletar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function getAll() {
  try {
    const respostaDoServior = await axios(URL_CATEGORIES);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function postAll(objetoCategorias) {
  try {
    const respostaDoServior = await axios.post(
      URL_CATEGORIES,
      objetoCategorias
    );
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}
