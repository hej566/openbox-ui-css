import React from 'react';
import Carousel from '../components/Carousel';
import img1 from '../assets/img/865-600x400.jpeg';
import img2 from '../assets/img/866-600x400.jpeg';
import img3 from '../assets/img/867-600x400.jpeg';

function Carousels() {
  const imgSrc = [
    { src: img1, active: true, index: '1', title: 'First slide label', content: 'Some representative placeholder content for the first slide.' },
    { src: img2, active: false, index: '2', title: 'Second slide label', content: 'Some representative placeholder content for the second slide.' },
    { src: img3, active: false, index: '3', title: 'Third slide label', content: 'Some representative placeholder content for the third slide.' },
  ];

  return (
    <div className="rc-carousels">
      <section className="rc-carousel-basic">
        <div className="rc-title">Basic carousel</div>
        <div className="rc-group">
          <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} />
        </div>
      </section>
      <section className="rc-carousel-control">
        <div className="rc-title">Control carousel</div>
        <div className="rc-group">
          <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} control />
        </div>
      </section>
      <section className="rc-carousel-control-indicator">
        <div className="rc-title">Control and indicator carousel</div>
        <div className="rc-group">
          <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} control indicator />
        </div>
      </section>
      <section className="rc-carousel-control-fade">
        <div className="rc-title">Control fade carousel</div>
        <div className="rc-group">
          <Carousel
            imgSrc={imgSrc}
            className="carousel-fade"
            imgClassName="d-block w-100"
            timing={3000}
            control
            indicator
          />
        </div>
      </section>
    </div>
  );
}

export default Carousels;
