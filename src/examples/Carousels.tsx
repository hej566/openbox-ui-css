import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import poster1 from '../assets/img/placeholder1.png';
import poster2 from '../assets/img/placeholder2.png';
import poster3 from '../assets/img/placeholder3.png';
import Carousel from '../components/Carousel';

function Carousels() {
  const imgSrc = [
    {
      src: poster1,
      active: true,
      index: '1',
      title: 'First slide',
      content: 'Some representative placeholder content for the first slide.',
    },
    {
      src: poster2,
      active: false,
      index: '2',
      title: 'Second slide',
      content: 'Some representative placeholder content for the second slide.',
    },
    {
      src: poster3,
      active: false,
      index: '3',
      title: 'Third slide',
      content: 'Some representative placeholder content for the third slide.',
    },
  ];

  const carouselOnly = `
    import poster1 from '../assets/img/placeholder1.png';
    import poster2 from '../assets/img/placeholder2.png';
    import poster3 from '../assets/img/placeholder3.png';
    import Carousel from '../components/Carousel';
    
    const imgSrc = [
      {
        src: poster1,
        active: true,
        index: '1',
        title: 'First slide',
        content: 'Some representative placeholder content for the first slide.',
      },
      {
        src: poster2,
        active: false,
        index: '2',
        title: 'Second slide',
        content: 'Some representative placeholder content for the second slide.',
      },
      {
        src: poster3,
        active: false,
        index: '3',
        title: 'Third slide',
        content: 'Some representative placeholder content for the third slide.',
      },
    ];
   
    <Carousel imgSrc={imgSrc} className="d-block" timing={3000} /> 
  `;

  const withControl = `
    import poster1 from '../assets/img/placeholder1.png';
    import poster2 from '../assets/img/placeholder2.png';
    import poster3 from '../assets/img/placeholder3.png';
    import Carousel from '../components/Carousel';
    
    const imgSrc = [
      {
        src: poster1,
        active: true,
        index: '1',
        title: 'First slide',
        content: 'Some representative placeholder content for the first slide.',
      },
      {
        src: poster2,
        active: false,
        index: '2',
        title: 'Second slide',
        content: 'Some representative placeholder content for the second slide.',
      },
      {
        src: poster3,
        active: false,
        index: '3',
        title: 'Third slide',
        content: 'Some representative placeholder content for the third slide.',
      },
    ];
   
    <Carousel imgSrc={imgSrc} className="d-block" timing={3000} control /> 
  `;

  const withIndicator = `
    import poster1 from '../assets/img/placeholder1.png';
    import poster2 from '../assets/img/placeholder2.png';
    import poster3 from '../assets/img/placeholder3.png';
    import Carousel from '../components/Carousel';
    
    const imgSrc = [
      {
        src: poster1,
        active: true,
        index: '1',
        title: 'First slide',
        content: 'Some representative placeholder content for the first slide.',
      },
      {
        src: poster2,
        active: false,
        index: '2',
        title: 'Second slide',
        content: 'Some representative placeholder content for the second slide.',
      },
      {
        src: poster3,
        active: false,
        index: '3',
        title: 'Third slide',
        content: 'Some representative placeholder content for the third slide.',
      },
    ];
   
    <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} indicator control /> 
  `;

  const crossfade = `
    import poster1 from '../assets/img/placeholder1.png';
    import poster2 from '../assets/img/placeholder2.png';
    import poster3 from '../assets/img/placeholder3.png';
    import Carousel from '../components/Carousel';
    
    const imgSrc = [
      {
        src: poster1,
        active: true,
        index: '1',
        title: 'First slide',
        content: 'Some representative placeholder content for the first slide.',
      },
      {
        src: poster2,
        active: false,
        index: '2',
        title: 'Second slide',
        content: 'Some representative placeholder content for the second slide.',
      },
      {
        src: poster3,
        active: false,
        index: '3',
        title: 'Third slide',
        content: 'Some representative placeholder content for the third slide.',
      },
    ];
   
    <Carousel
      imgSrc={imgSrc}
      className="carousel-fade"
      imgClassName="d-block w-100"
      timing={3000}
      control
      indicator
    />
  `;

  return (
    <div className="rb-carousels">
      <section className="rb-carousel-only">
        <h1 className="rb-title">Carousel only</h1>
        <div className="rb-group">
          <div className="rb-carousel-wrapper">
            <Carousel imgSrc={imgSrc} className="d-block" timing={3000} />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {carouselOnly}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-carousel-control">
        <h1 className="rb-title">With controls</h1>
        <div className="rb-group">
          <div className="rb-carousel-wrapper">
            <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} control />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {withControl}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-carousel-indicator">
        <h1 className="rb-title">With indicator</h1>
        <div className="rb-group">
          <div className="rb-carousel-wrapper">
            <Carousel imgSrc={imgSrc} className="d-block w-100" timing={3000} indicator control />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {withIndicator}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-carousel-control-fade">
        <h1 className="rb-title">Crossfade</h1>
        <div className="rb-group">
          <div className="rb-carousel-wrapper">
            <Carousel
              imgSrc={imgSrc}
              className="carousel-fade"
              imgClassName="d-block w-100"
              timing={3000}
              control
              indicator
            />
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {crossfade}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Carousels;
