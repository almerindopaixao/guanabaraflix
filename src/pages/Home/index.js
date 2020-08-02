import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import { toast } from 'react-toastify';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import getAllWithVideos from '../../repositories/categorias';
import Spinner from '../../components/Spinner';
import './Home.css';

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getAllWithVideos()
      .then((categoriasComVideos) => setDados(categoriasComVideos))
      .catch((err) => {
        // eslint-disable-next-line no-console
        toast.error(err.message);
      });
  }, []);

  return (
    <div className="container">
      {dados.length === 0 && (
        <div style={{ background: 'black' }}>
          <Spinner>Loading...</Spinner>
        </div>
      )}
      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dados[0].videos[0].titulo}
                url={dados[0].videos[0].url}
                videoDescription="O novo site do CursoemVideo está em testes e já conta com todos os cursos cadastrado, acompanhamento das aulas, avaliação final e emissão de certificados aceitos em território nacional!!"
              />

              <Carousel ignoreFirstVideo category={dados[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </div>
  );
}
