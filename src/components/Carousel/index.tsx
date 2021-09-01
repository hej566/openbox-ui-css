import React, { Fragment, useEffect, useRef, useState } from 'react';
import deepClone from '../../utils/deepClone';
import Icon from '../Icon';
import ChevronRight from '../../assets/icons/svg/chevron-right-regular.svg';
import ChevronLeft from '../../assets/icons/svg/chevron-left-regular.svg';
import { Declaration } from "postcss";

interface imgObject {
  src: string;
  active: boolean;
  index: string;
}

interface PropsTypes {
  imgSrc: imgObject[];
  className?: string;
  timing?: number;
  control?: boolean;
}

enum Direction {
  RTL = 1,
  LTR = 2,
}

Carousel.defaultProps = {
  className: '',
  timing: 3000,
  control: false,
} as PropsTypes;

function Carousel(props: PropsTypes) {
  const { imgSrc, className, timing, control } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const carouselControlPreRef = useRef<HTMLDivElement>(null);
  const carouselControlNextRef = useRef<HTMLDivElement>(null);
  const [imgSrcState, setImgSrcState] = useState(imgSrc);
  let timerId: any = null;

  function transitionEndHandler(e: any) {
    if (e.target.classList.contains('carousel-item-start')) {
      e.target.classList.remove('carousel-item-start', 'active');
    }

    if (e.target.classList.contains('carousel-item-next')) {
      e.target.classList.remove('carousel-item-next');
      e.target.classList.add('active');
    }

    if (e.target.classList.contains('carousel-item-end')) {
      e.target.classList.remove('carousel-item-end', 'active');
    }

    if (e.target.classList.contains('carousel-item-prev')) {
      e.target.classList.remove('carousel-item-prev');
      e.target.classList.add('active');
    }

    const carouselDom = carouselRef.current;
    if (carouselDom && carouselDom.dataset.timerId !== '0') {
      freshImgSrcState();
    }
  }

  function freshImgSrcState() {
    const carouselInnerDom = carouselInnerRef.current;
    if (carouselInnerDom) {
      const deepCopyImgSrcState = deepClone(imgSrcState);
      if (carouselInnerRef.current) {
        Array.from(carouselInnerRef.current.children).forEach((item, key) => {
          if (item.classList.contains('active')) {
            deepCopyImgSrcState[key].active = true;
          } else {
            deepCopyImgSrcState[key].active = false;
          }
        });
        setImgSrcState(() => {
          return deepCopyImgSrcState;
        });
      }
    }
  }

  function mouseEnterHandler() {
    const carouselDom = carouselRef.current;
    if (carouselDom) {
      clearTimeout(Number(carouselDom.dataset.timerId));
    }
  }

  function mouseLeaveHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      timerId = setSlideTimer(carouselInnerDom.children, Direction.RTL);
      carouselDom.dataset.timerId = String(timerId);
    }
  }

  function preSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      carouselDom.dataset.timerId = '0';
      createSlideAnimation(carouselInnerDom.children, Direction.RTL);
    }
  }

  function nextSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      carouselDom.dataset.timerId = '0';
      createSlideAnimation(carouselInnerDom.children, Direction.LTR);
    }
  }

  function createSlideAnimation(items: HTMLCollection, direction: Direction) {
    let activeIndex = -1;
    Array.from(items).forEach((item, key) => {
      if (item.classList.contains('active')) activeIndex = key;
    });

    if (direction === 1) {
      requestAnimationFrame(() => {
        if (activeIndex > -1) {
          if (activeIndex < items.length - 1) {
            items[activeIndex + 1].classList.add('carousel-item-next');
            setTimeout(() => {
              items[activeIndex + 1].classList.add('carousel-item-start');
              items[activeIndex].classList.add('carousel-item-start');
            }, 0);
          } else {
            items[0].classList.add('carousel-item-next');
            setTimeout(() => {
              items[0].classList.add('carousel-item-start');
              items[activeIndex].classList.add('carousel-item-start');
            }, 0);
          }
        }
      });
    } else {
      requestAnimationFrame(() => {
        if (activeIndex > -1) {
          if (activeIndex > 0) {
            items[activeIndex - 1].classList.add('carousel-item-prev');
            setTimeout(() => {
              items[activeIndex - 1].classList.add('carousel-item-end');
              items[activeIndex].classList.add('carousel-item-end');
            }, 0);
          } else {
            items[items.length - 1].classList.add('carousel-item-prev');
            setTimeout(() => {
              items[items.length - 1].classList.add('carousel-item-end');
              items[activeIndex].classList.add('carousel-item-end');
            }, 0);
          }
        }
      });
    }
  }


  function setSlideTimer(items: HTMLCollection, direction: Direction) {
    return setTimeout(() => {
      createSlideAnimation(items, direction);
    }, timing);
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
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      timerId = setSlideTimer(carouselInnerDom.children, Direction.RTL);
      carouselDom.dataset.timerId = String(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [imgSrcState]);

  return (
    <div
      className="carousel slide"
      data-ride="carousel"
      ref={carouselRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="carousel-inner" ref={carouselInnerRef}>
        {listImage}
      </div>
      {control && (
        <>
          <div
            className="carousel-control-prev"
            ref={carouselControlPreRef}
            onClick={preSlideHandler}
          >
            <Icon Component={ChevronLeft} />
          </div>
          <div
            className="carousel-control-next"
            ref={carouselControlNextRef}
            onClick={nextSlideHandler}
          >
            <Icon Component={ChevronRight} />
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
