import React, { useEffect, useRef, useState } from 'react';
import deepClone from '../../utils/deepClone';
import Icon from '../Icon';
import ChevronRight from '../../assets/icons/svg/chevron-right-regular.svg';
import ChevronLeft from '../../assets/icons/svg/chevron-left-regular.svg';

const Carousel = (props: propTypes) => {
  const { imgSrc, className, timing, control, indicator, imgClassName } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const carouselControlPrevRef = useRef<HTMLDivElement>(null);
  const carouselControlNextRef = useRef<HTMLDivElement>(null);
  const carouselIndicatorsRef = useRef<HTMLDivElement>(null);
  const [imgSrcState, setImgSrcState] = useState<imgObject[]>(imgSrc);
  const [pause, setPauseState] = useState<boolean>(false);
  const carouselClasses: string[] = ['carousel', 'slide'];
  let timerId: any = null;
  const indicatorsListenerObj: { [key: number]: EventListenerObject } = {};

  if (className) carouselClasses.push(className);

  function updateImgState() {
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
        setImgSrcState(() => deepCopyImgSrcState);
      }
    }
  }

  // event handler
  function transitionAfterHandler() {
    const carouselDom = carouselRef.current;
    if (control) {
      const carouselControlPrevDom = carouselControlPrevRef.current;
      const carouselControlNextDom = carouselControlNextRef.current;
      if (carouselControlPrevDom && carouselControlNextDom) {
        carouselControlPrevDom.addEventListener('click', prevSlideHandler, false);
        carouselControlNextDom.addEventListener('click', nextSlideHandler, false);
      }
    }
    if (indicator) {
      const carouselIndicatorsDom = carouselIndicatorsRef.current;
      if (carouselIndicatorsDom) {
        Array.from(carouselIndicatorsDom.children).forEach((item, key) => {
          item.addEventListener('click', indicatorsListenerObj[key]);
        });
      }
    }

    if (carouselDom) {
      updateImgState();
    }
  }

  function transitionEndHandler(e: any) {
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

    requestAnimationFrame(transitionAfterHandler);
  }

  function indicatorHandler(key: number): EventListenerObject {
    function handleEvent(e: Event): void {
      const carouselInnerDom = carouselInnerRef.current;
      const carouselDom = carouselRef.current;
      if (carouselInnerDom && carouselDom) {
        createSlideAnimationByIndicator(carouselInnerDom.children, key);
      }
    }
    return {
      handleEvent,
    };
  }

  function mouseenterHandler() {
    const carouselDom = carouselRef.current;
    if (carouselDom) {
      clearTimeout(parseInt(carouselDom.dataset.timerId!, 10));
      setPauseState(true);
    }
  }

  function mouseleaveHandler() {
    setPauseState(false);
  }

  function prevSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      createSlideAnimation(carouselInnerDom.children, slideDirection.RTL);
    }
  }

  function nextSlideHandler() {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      createSlideAnimation(carouselInnerDom.children, slideDirection.LTR);
    }
  }

  // create slide animation
  function createSlideAnimationByIndicator(items: HTMLCollection, nextIndex: number) {
    let activeIndex = -1;
    let indicators: HTMLCollection;

    Array.from(items).forEach((item, key) => {
      if (item.classList.contains('active')) activeIndex = key;
    });

    if (control) {
      const carouselControlPrevDom = carouselControlPrevRef.current;
      const carouselControlNextDom = carouselControlNextRef.current;
      if (carouselControlPrevDom && carouselControlNextDom) {
        carouselControlPrevDom.removeEventListener('click', prevSlideHandler);
        carouselControlNextDom.removeEventListener('click', nextSlideHandler);
      }
    }

    if (indicator) {
      const carouselIndicatorsDom = carouselIndicatorsRef.current;
      if (carouselIndicatorsDom) {
        indicators = carouselIndicatorsDom.children;
        Array.from(indicators).forEach((item, key) => {
          item.classList.remove('active');
          item.removeEventListener('click', indicatorsListenerObj[key]);
        });
      }
    }

    requestAnimationFrame(() => {
      if (activeIndex > -1 && activeIndex > nextIndex) {
        items[nextIndex].classList.add('carousel-item-prev');
        requestAnimationFrame(() => {
          items[activeIndex].classList.add('carousel-item-end');
          items[nextIndex].classList.add('carousel-item-end');
        });
      } else if (activeIndex > -1 && activeIndex < nextIndex) {
        items[nextIndex].classList.add('carousel-item-next');
        requestAnimationFrame(() => {
          items[activeIndex].classList.add('carousel-item-start');
          items[nextIndex].classList.add('carousel-item-start');
        });
      } else if (activeIndex > -1 && activeIndex === nextIndex) {
        const carouselIndicatorsDom = carouselIndicatorsRef.current;
        if (carouselIndicatorsDom) {
          Array.from(carouselIndicatorsDom.children).forEach((item, key) => {
            item.addEventListener('click', indicatorsListenerObj[key]);
          });
        }
      }
      if (indicators) indicators[nextIndex].classList.add('active');
    });
  }

  function createSlideAnimation(items: HTMLCollection, direction: slideDirection) {
    let activeIndex = -1;
    let indicators: HTMLCollection;

    Array.from(items).forEach((item, key) => {
      if (item.classList.contains('active')) activeIndex = key;
    });

    if (control) {
      const carouselControlPrevDom = carouselControlPrevRef.current;
      const carouselControlNextDom = carouselControlNextRef.current;
      if (carouselControlPrevDom && carouselControlNextDom) {
        carouselControlPrevDom.removeEventListener('click', prevSlideHandler);
        carouselControlNextDom.removeEventListener('click', nextSlideHandler);
      }
    }

    if (indicator) {
      const carouselIndicatorsDom = carouselIndicatorsRef.current;
      if (carouselIndicatorsDom) {
        indicators = carouselIndicatorsDom.children;
        Array.from(indicators).forEach((item, key) => {
          item.classList.remove('active');
          item.removeEventListener('click', indicatorsListenerObj[key]);
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

  function setTimer(items: HTMLCollection, direction: slideDirection) {
    if (!pause) {
      return setTimeout(() => {
        createSlideAnimation(items, direction);
      }, timing);
    }
    return -1;
  }

  useEffect(() => {
    const carouselInnerDom = carouselInnerRef.current;
    const carouselControlPrevDom = carouselControlPrevRef.current;
    const carouselControlNextDom = carouselControlNextRef.current;
    const carouselDom = carouselRef.current;
    if (carouselInnerDom && carouselDom) {
      timerId = setTimer(carouselInnerDom.children, slideDirection.RTL);
      carouselDom.dataset.timerId = String(timerId);
    }
    if (indicator) {
      const carouselIndicatorsDom = carouselIndicatorsRef.current;
      if (carouselIndicatorsDom) {
        Array.from(carouselIndicatorsDom.children).forEach((item, key) => {
          indicatorsListenerObj[key] = indicatorHandler(key);
          item.addEventListener('click', indicatorsListenerObj[key]);
        });
      }
    }
    if (control) {
      const carouselControlPrevDom = carouselControlPrevRef.current;
      const carouselControlNextDom = carouselControlNextRef.current;
      if (carouselControlPrevDom && carouselControlNextDom) {
        carouselControlPrevDom.addEventListener('click', prevSlideHandler);
        carouselControlNextDom.addEventListener('click', nextSlideHandler);
      }
    }
    return () => {
      clearTimeout(timerId);
      if (carouselControlPrevDom && carouselControlNextDom) {
        carouselControlPrevDom.removeEventListener('click', prevSlideHandler);
        carouselControlNextDom.removeEventListener('click', nextSlideHandler);
      }
      if (indicator) {
        const carouselIndicatorsDom = carouselIndicatorsRef.current;
        if (carouselIndicatorsDom) {
          Array.from(carouselIndicatorsDom.children).forEach((item, key) => {
            indicatorsListenerObj[key] = indicatorHandler(key);
            item.removeEventListener('click', indicatorsListenerObj[key]);
          });
        }
      }
      if (control) {
        const carouselControlPrevDom = carouselControlPrevRef.current;
        const carouselControlNextDom = carouselControlNextRef.current;
        if (carouselControlPrevDom && carouselControlNextDom) {
          carouselControlPrevDom.removeEventListener('click', prevSlideHandler);
          carouselControlNextDom.removeEventListener('click', nextSlideHandler);
        }
      }
    };
  }, [imgSrcState, pause]);

  const listImage = imgSrcState.map((item) => (
    <div
      className={item.active ? 'carousel-item active' : 'carousel-item'}
      key={item.index}
      onTransitionEnd={transitionEndHandler}
    >
      <img src={item.src} className={imgClassName} alt={item.content} />
      <div className="carousel-caption d-none d-md-block">
        {item.title && <div>{item.title}</div>}
        {item.content && <div>{item.content}</div>}
      </div>
    </div>
  ));

  const indicators = imgSrcState.map((item) => (
    <button
      type="button"
      className={item.active ? 'active carousel-indicator' : 'carousel-indicator'}
      aria-current={item.active}
      key={item.index}
      aria-label={`slide ${item.index}`}
    />
  ));

  return (
    <div
      className={carouselClasses.join(' ')}
      ref={carouselRef}
      onMouseEnter={mouseenterHandler}
      onMouseLeave={mouseleaveHandler}
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
          <div className="carousel-control-prev" ref={carouselControlPrevRef}>
            <Icon component={ChevronLeft} />
          </div>
          <div className="carousel-control-next" ref={carouselControlNextRef}>
            <Icon component={ChevronRight} />
          </div>
        </>
      )}
    </div>
  );
};

type imgObject = {
  src: string;
  active: boolean;
  index: string;
  title: string;
  content: string;
};

enum slideDirection {
  RTL = 1,
  LTR = 2,
}

type propTypes = {
  imgSrc: imgObject[];
  className?: string;
  timing?: number;
  control?: boolean;
  indicator?: boolean;
  imgClassName?: string;
};

Carousel.defaultProps = {
  className: '',
  timing: 3000,
  control: false,
  indicator: false,
  imgClassName: '',
};

export default React.memo(Carousel);
