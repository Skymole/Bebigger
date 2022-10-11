import React, { useState, useRef } from 'react';
import { SwiperItemType } from './types';
import SwiperItem from './SwiperItem';
import { getRefValue, useStateRef } from '../lib/hooks';
import { getTouchEventData } from '../lib/dom';
import '../styles/Swiper.css';

export type Props = {
  items: Array<SwiperItemType>;
};

const MIN_SWIPE_REQUIRED = 40;

function Swiper({ items }: Props) {
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;
    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
    newOffsetX = maxOffsetX;
    }
    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }
    setOffsetX(newOffsetX);

  };

  const onTouchEnd = () => {
    
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);


    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);
    const containerEl = getRefValue(containerRef);
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };


const onMouseMove = (e: MouseEvent) => {
    const currentX = e.clientX;
    const diff = getRefValue(startXRef) - currentX;
    const newOffsetX = getRefValue(currentOffsetXRef) - diff;
    setOffsetX(newOffsetX);
};

  const onMouseUp = () => {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = e.clientX;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

  };

  const indicatorOnClick = (idx: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };


  return (
    <div className="swiper-container" 
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
    <div className="swiper-container">
      <ul
      ref={containerRef}
        className={`swiper-list ${isSwiping ? 'is-swiping' : ''}`}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {items.map((item, idx) => (
          <SwiperItem key={idx} {...item} />
        ))}
      </ul>

            <ul className="swiper-indicator">
        {items.map((_item, idx) => (
          <li
            key={idx}
            className={`swiper-indicator-item ${
              currentIdx === idx ? 'active' : ''
            }`}
            data-testid="incidator"
            onClick={() => indicatorOnClick(idx)}
          />
        ))}
      </ul>

    </div>
    </div>
  );
}

export default Swiper;