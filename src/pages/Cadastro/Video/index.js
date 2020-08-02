import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import create from '../../../repositories/videos';
import { getAll } from '../../../repositories/categorias';
import './video.css';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, valores, handleClick } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  function isYoutubeVideo(url) {
    const v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return url.match(v) ? RegExp.$1 : false;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let errors = [];
    const chaves = Object.keys(valores);

    errors = chaves.filter((chave) => {
      return !valores[chave];
    });

    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(`Campo ${error} precisa ser preenchido`);
      });
      return;
    }

    const codVideo = isYoutubeVideo(valores.url);

    if (!codVideo) {
      toast.error(`Vídeo não encontrado, Por favor digite uma url válida`);
      return;
    }

    try {
      const { id } = categorias.find((categoria) => {
        return categoria.titulo === valores.categoria;
      });

      create({
        titulo: valores.titulo,
        url: valores.url,
        categoriaId: id,
      })
        .then(() => {
          history.push('/');
          toast.success('Video cadastrado com sucesso');
        })
        .catch((e) => {
          toast.error('Desculpe mas não foi possivél cadastrar o vídeo');
          toast.error(e.message);
        });
    } catch (e) {
      toast.error('Categoria não encontrada');
    }
  }

  useEffect(() => {
    getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      })
      .catch((e) => toast.error(e.message));
  }, []);

  return (
    <div className="main">
      <h1 className="titulo">Cadastro de Vídeo</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <FormField
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        >
          Título do Vídeo:
        </FormField>

        <FormField
          name="url"
          type="text"
          value={valores.url}
          onChange={handleChange}
        >
          Url:
        </FormField>
        <FormField
          name="categoria"
          type="text"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        >
          Categoria:
        </FormField>
        <div className="botoes">
          <Button background="#DB202C">Enviar</Button>
          <Button
            onClick={handleClick}
            background="#9E9E9E"
            type="reset"
            color="black"
          >
            Limpar
          </Button>
        </div>
      </form>

      <div className="ir-home">
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </div>
    </div>
  );
}
