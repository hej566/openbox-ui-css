import React from 'react';
import Carousel from '../components/Carousel';
import img1 from '../assets/img/865-600x400.jpeg';
import img2 from '../assets/img/866-600x400.jpeg';
import img3 from '../assets/img/867-600x400.jpeg';

function Carousels() {
  const imgSrc = [
    { src: img1, active: true, index: '1' },
    { src: img2, active: false, index: '2' },
    { src: img3, active: false, index: '3' },
  ];

  return (
    <div className="rc-carousels">
      <section className="rc-carousel-basic">
        <div className="rc-title">Basic carousel</div>
        <div className="rc-group">
          <Carousel imgSrc={imgSrc} className="d-block w-100" timing={2000} />
        </div>
      </section>
    </div>
  );
}

export default Carousels;
