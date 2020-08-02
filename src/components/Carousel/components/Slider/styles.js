import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    transition: transform 0.3s;
    &:before {
      font-size: 30px;
      color: ${({ categoryColor }) => categoryColor};
    }
    &:hover {
      transform: scale(1.2);
    }
  }
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 16px;
  }
`;

const SliderItem = styled.li`
  margin: 16px 16px;
  transition: transform 0.3s;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { SliderItem, Container };
