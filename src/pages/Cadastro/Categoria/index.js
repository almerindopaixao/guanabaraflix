import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import uuid from 'uuid/dist/v4';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import { getAll, postAll, deleteOne } from '../../../repositories/categorias';
import './categoria.css';
import { Table, Titulo, Container, Conteudo } from '../../../components/Tabela';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#DB202C',
  };

  const { valores, handleChange, handleClick, clearForm } = useForm(
    valoresIniciais
  );

  const [categorias, setCategorias] = useState([]);

  function handleRemove(e) {
    const target = String(e.target.getAttribute('target'));

    deleteOne(target)
      .then(() => {
        toast.success('Categoria deletada com sucesso');
        getAll()
          .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
          })
          .catch((err) => toast.error(err.message));
      })
      .catch(() => toast.error('Não foi possível deletar a categoria'));
  }

  function handleSubmit(e) {
    e.preventDefault();
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

    postAll({
      titulo: valores.titulo,
      descricao: valores.descricao,
      cor: valores.cor,
    })
      .then(() => {
        setCategorias([
          ...categorias,
          {
            id: categorias.length + 1,
            titulo: valores.titulo,
            descricao: valores.descricao,
            cor: valores.cor,
          },
        ]);
        toast.success('Categoria cadastrada com sucesso');
        clearForm(valoresIniciais);
      })
      .catch((erro) => {
        toast.error('Desculpe mas não foi possivél cadastrar a categoria');
        toast.error(erro.message);
      });
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
      <h1 className="titulo">Cadastro de categoria: {valores.titulo}</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <FormField
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        >
          Título da Categoria:
        </FormField>

        <FormField
          name="descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handleChange}
        >
          Descrição:
        </FormField>

        <FormField
          name="cor"
          type="color"
          value={valores.cor}
          onChange={handleChange}
        >
          Cor:
        </FormField>

        <div className="botoes">
          <Button background="#DB202C">Enviar</Button>
          <Button
            background="#9E9E9E"
            onClick={handleClick}
            type="reset"
            color="black"
          >
            Limpar
          </Button>
        </div>
      </form>

      <Table>
        <Container>
          <Titulo>Titulo</Titulo>
          <Titulo>Descrição</Titulo>
          <Titulo>Editar</Titulo>
          <Titulo className="ultimo">Remover</Titulo>
        </Container>
        {categorias.lenght === 0 && <div>Loading...</div>}
        {categorias.map((categoria) => {
          return (
            <Container key={uuid()}>
              <Conteudo>{categoria.titulo}</Conteudo>
              <Conteudo>{categoria.descricao}</Conteudo>
              <Conteudo>
                <Conteudo.Paragrafo
                  as={Link}
                  to={`/editar/categoria?id=${categoria.id}&titulo=${
                    categoria.titulo
                  }&descricao=${
                    categoria.descricao
                  }&cor=${categoria.cor.replace('#', '%23')}`}
                >
                  Editar
                </Conteudo.Paragrafo>
              </Conteudo>
              <Conteudo>
                <Conteudo.Paragrafo
                  target={categoria.id}
                  onClick={handleRemove}
                >
                  Remover
                </Conteudo.Paragrafo>
              </Conteudo>
            </Container>
          );
        })}
      </Table>
      <div className="ir-home">
        <Link to="/">Ir para home</Link>
      </div>
    </div>
  );
}
