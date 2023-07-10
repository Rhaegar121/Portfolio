import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

const Carousel = ({ carousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {carousel.map((img) => (
        <div key={img} className="carousel-img">
          <img src={img} alt="project sample img" />
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  carousel: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
