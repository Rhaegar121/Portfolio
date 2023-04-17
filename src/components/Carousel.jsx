import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './styles/carousel.module.css';

const Carousel = ({ carousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={style.slider}>
        {carousel.map((img) => (
            <div>
                <img src={img} className={style.img} />
            </div>
        ))}   
    </Slider>
  );
};

export default Carousel;
