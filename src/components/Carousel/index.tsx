import React, { useEffect, useRef, useState } from 'react';
import deepClone from '../../utils/deepClone';

interface imgObject {
  src: string;
  active: boolean;
  index: string;
}

interface PropsTypes {
  imgSrc: imgObject[];
  className?: string;
  timing?: number;
}

Carousel.defaultProps = {
  className: '',
  timing: 3000,
} as PropsTypes;

function Carousel(props: PropsTypes) {
  const { imgSrc, className, timing } = props;
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [imgSrcState, setImgSrcState] = useState(imgSrc);

  function transitionEndHandler(e: any) {
    if (e.target.classList.contains('carousel-item-start')) {
      e.target.classList.remove('carousel-item-start', 'active');
    }

    if (e.target.classList.contains('carousel-item-next')) {
      e.target.classList.remove('carousel-item-next');
      e.target.classList.add('active');
    }
    const deepCopyimgSrcState = deepClone(imgSrcState);
    if (carouselInnerRef.current) {
      Array.from(carouselInnerRef.current.children).forEach((item, key) => {
        if (item.classList.contains('active')) {
          deepCopyimgSrcState[key].active = true;
        } else {
          deepCopyimgSrcState[key].active = false;
        }
      });
      setImgSrcState(() => {
        return deepCopyimgSrcState;
      });
    }
  }

  const listImage = imgSrcState.map((item) => {
    return (
      <div
        className={item.active ? 'carousel-item active' : 'carousel-item'}
        key={item.index}
        onTransitionEnd={transitionEndHandler}
      >
        <img src={item.src} className={className} />
      </div>
    );
  });

  useEffect(() => {
    const carouselInnerDom = carouselInnerRef.current;
    if (carouselInnerDom) {
      const timeoutId = setTimeout(() => {
        let activeIndex = -1;
        Array.from(carouselInnerDom.children).forEach((item, key) => {
          if (item.classList.contains('active')) activeIndex = key;
        });
        requestAnimationFrame(() => {
          if (activeIndex > -1) {
            if (activeIndex < carouselInnerDom.children.length - 1) {
              carouselInnerDom.children[activeIndex + 1].classList.add('carousel-item-next');
              setTimeout(() => {
                carouselInnerDom.children[activeIndex + 1].classList.add('carousel-item-start');
                carouselInnerDom.children[activeIndex].classList.add('carousel-item-start');
              }, 0);
            } else {
              carouselInnerDom.children[0].classList.add('carousel-item-next');
              setTimeout(() => {
                carouselInnerDom.children[0].classList.add('carousel-item-start');
                carouselInnerDom.children[activeIndex].classList.add('carousel-item-start');
              }, 0);
            }
          }
        });
      }, timing);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [imgSrcState]);

  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" ref={carouselInnerRef}>
        {listImage}
      </div>
    </div>
  );
}

export default Carousel;
