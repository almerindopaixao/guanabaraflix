import styled from 'styled-components';

const Button = styled.button`
  color: ${({ color }) => color || `white`};
  border: ${({ border }) => (border ? `1px solid white` : `none`)};
  box-sizing: border-box;
  background: ${({ background }) => background};
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  text-align: center;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;
  }
`;

export default Button;
