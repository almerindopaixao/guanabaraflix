import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import { SliderItem } from './components/Slider/styles';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';

export default function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescribe = category.descricao;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          <ExtraLink
            href={categoryExtraLink ? categoryExtraLink.url : '#'}
            target="_blank"
          >
            {categoryExtraLink ? categoryExtraLink.text : categoryDescribe}
          </ExtraLink>
        </>
      )}
      <Slider categoryColor={categoryColor}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
  category: {
    link_extra: {
      url: '',
      text: '',
    },
  },
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    link_extra: PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
    videos: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};
