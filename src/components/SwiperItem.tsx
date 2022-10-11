import React from 'react';
import { SwiperItemType } from './types';

import '../styles/SwiperItem.css';

export type Props = SwiperItemType;

function SwiperItem({ imageSrc, imageAlt }: Props) {
  return (
    <li className="swiper-item">
      <img src={imageSrc} alt={imageAlt} draggable={false} className="swiper-img" />
    </li>
  );
}

export default SwiperItem;