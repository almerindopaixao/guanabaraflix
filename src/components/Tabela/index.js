import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 15% 15%;
  align-items: center;
`;

const Table = styled.div`
  border: 1px solid var(--primary);
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Titulo = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 20px;
  border-bottom: 1px solid var(--primary);

  &:not(.ultimo) {
    border-right: 1px solid var(--primary);
  }
`;

const Conteudo = styled.div`
  padding-left: 10px;
  color: var(--blackLighter);
`;

Conteudo.Paragrafo = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { Table, Titulo, Conteudo, Container };
