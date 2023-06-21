import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './styles/carousel.module.css';

const Carousel = ({ carousel }) => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul className={style.slick_dots}>{dots}</ul>
      </div>
    ),
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: style.slider,
  };

  return (
    <Slider {...settings}>
        {carousel.map((img) => (
            <div className={style.img}>
                <img src={img} alt="project sample img" />
            </div>
        ))}   
    </Slider>
  );
};

export default Carousel;
