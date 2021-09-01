import React, { useEffect, useRef, useState } from 'react';
import deepClone from '../../utils/deepClone';
import Icon from '../Icon';
import ChevronRight from '../../assets/icons/svg/chevron-right-regular.svg';
import ChevronLeft from '../../assets/icons/svg/chevron-left-regular.svg';
import Line from '../../assets/icons/svg/horizontal-rule-duotone.svg';

interface imgObject {
  src: string;
  active: boolean;
  index: string;
}

enum SlideDirection {
  RTL = 1,
  LTR = 2,
}

interface PropsTypes {
  imgSrc: imgObject[];
  className?: string;
  timing?: number;
  control?: boolean;
  indicator?: boolean;
}

Carousel.defaultProps = {
  className: '',
  timing: 3000,
  control: false,
  indicator: false,
} as PropsTypes;

function Carousel(props: PropsTypes) {
  const { imgSrc, className, timing, control, indicator } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const carouselControlPreRef = useRef<HTMLDivElement>(null);
  const carouselControlNextRef = useRef<HTMLDivElement>(null);
  const carouselIndicatorsRef = useRef<HTMLDivElement>(null);
  const [imgSrcState, setImgSrcState] = useState(imgSrc);
  let timerId: any = null;

  function transitionEndHandler(e: any) {
    const carouselDom = carouselRef.current;
    const carouselControlPreDom = carouselControlPreRef.current;
    const carouselControlNextDom = carouselControlNextRef.current;
    if (carouselDom && carouselDom.dataset.timerId !== '0') {
      freshImgSrcState();
    }
    setTimeout(() => {
      if (carouselControlPreDom && carouselControlNextDom) {
        carouselControlPreDom.addEventListener('click', preSlideHandler, false);
        carouselControlNextDom.addEventListener('click', nextSlideHandler, false);
      }
    }, 0);
  }

  function transitionEndCaptureHandler(e: any) {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    }
    if (e.target.classList.contains('carousel-item-start')) {
      e.target.classList.remove('carousel-item-start');
    }

    if (e.target.classList.contains('carousel-item-end')) {
      e.target.classList.remove('carousel-item-end');
    }

    if (e.target.classList.contains('carousel-item-next')) {
      e.target.classList.remove('carousel-item-next');
      e.target.classList.add('active');
    }

    if (e.target.classList.contains('carousel-item-prev')) {
      e.target.classList.remove('carousel-item-prev');
      e.target.classList.add('active');
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
    const carouselControlPreDom = carouselControlPreRef.current;
    const carouselControlNextDom = carouselControlNextRef.current;
    if (carouselDom && carouselControlPreDom && carouselControlNextDom) {
      clearTimeout(Number(carouselDom.dataset.timerId));
      carouselControlPreDom.addEventListener('click', preSlideHandler, false);
      carouselControlNextDom.addEventListener('click', nextSlideHandler, false);
    }
  }

  function mouseLeaveHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    const carouselControlPreDom = carouselControlPreRef.current;
    const carouselControlNextDom = carouselControlNextRef.current;
    if (carouselInnerDom && carouselDom && carouselControlPreDom && carouselControlNextDom) {
      timerId = setSlideTimer(carouselInnerDom.children, SlideDirection.RTL);
      carouselDom.dataset.timerId = String(timerId);
      carouselControlPreDom.removeEventListener('click', preSlideHandler);
      carouselControlNextDom.removeEventListener('click', nextSlideHandler);
    }
  }

  function preSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      carouselDom.dataset.timerId = '0';
      createSlideAnimation(carouselInnerDom.children, SlideDirection.RTL);
    }
  }

  function nextSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      carouselDom.dataset.timerId = '0';
      createSlideAnimation(carouselInnerDom.children, SlideDirection.LTR);
    }
  }

  function createSlideAnimation(items: HTMLCollection, direction: SlideDirection) {
    let activeIndex = -1;
    let indicators: HTMLCollection;
    Array.from(items).forEach((item, key) => {
      if (item.classList.contains('active')) activeIndex = key;
    });

    const carouselControlPreDom = carouselControlPreRef.current;
    const carouselControlNextDom = carouselControlNextRef.current;
    if (carouselControlPreDom && carouselControlNextDom) {
      carouselControlPreDom.removeEventListener('click', preSlideHandler);
      carouselControlNextDom.removeEventListener('click', nextSlideHandler);
    }

    if (indicator) {
      const carouselIndicatorsDom = carouselIndicatorsRef.current;
      if (carouselIndicatorsDom) {
        indicators = carouselIndicatorsDom.children;
        Array.from(indicators).forEach((item) => {
          item.classList.remove('active');
        });
      }
    }

    if (direction === 1) {
      requestAnimationFrame(() => {
        if (activeIndex > -1) {
          if (activeIndex < items.length - 1) {
            items[activeIndex + 1].classList.add('carousel-item-next');
            requestAnimationFrame(() => {
              items[activeIndex + 1].classList.add('carousel-item-start');
              items[activeIndex].classList.add('carousel-item-start');
              if (indicators) indicators[activeIndex + 1].classList.add('active');
            });
          } else {
            items[0].classList.add('carousel-item-next');
            requestAnimationFrame(() => {
              items[0].classList.add('carousel-item-start');
              items[activeIndex].classList.add('carousel-item-start');
              if (indicators) indicators[0].classList.add('active');
            });
          }
        }
      });
    } else {
      requestAnimationFrame(() => {
        if (activeIndex > -1) {
          if (activeIndex > 0) {
            items[activeIndex - 1].classList.add('carousel-item-prev');
            requestAnimationFrame(() => {
              items[activeIndex - 1].classList.add('carousel-item-end');
              items[activeIndex].classList.add('carousel-item-end');
              if (indicators) indicators[activeIndex - 1].classList.add('active');
            });
          } else {
            items[items.length - 1].classList.add('carousel-item-prev');
            requestAnimationFrame(() => {
              items[items.length - 1].classList.add('carousel-item-end');
              items[activeIndex].classList.add('carousel-item-end');
              if (indicators) indicators[indicators.length - 1].classList.add('active');
            });
          }
        }
      });
    }
  }

  function setSlideTimer(items: HTMLCollection, direction: SlideDirection) {
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
        onTransitionEndCapture={transitionEndCaptureHandler}
      >
        <img src={item.src} className={className} />
      </div>
    );
  });

  const indicators = imgSrcState.map((item) => {
    return (
      <button
        type="button"
        className={item.active ? 'active carousel-indicator' : 'carousel-indicator'}
        aria-current={item.active}
        key={item.index}
      />
    );
  });

  useEffect(() => {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      timerId = setSlideTimer(carouselInnerDom.children, SlideDirection.RTL);
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
      {indicator && (
        <div className="carousel-indicators" ref={carouselIndicatorsRef}>
          {indicators}
        </div>
      )}
      <div className="carousel-inner" ref={carouselInnerRef}>
        {listImage}
      </div>
      {control && (
        <>
          <div
            className="carousel-control-prev"
            ref={carouselControlPreRef}
          >
            <Icon Component={ChevronLeft} />
          </div>
          <div
            className="carousel-control-next"
            ref={carouselControlNextRef}
          >
            <Icon Component={ChevronRight} />
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
