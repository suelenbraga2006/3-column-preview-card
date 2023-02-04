import React from 'react';
import { Container } from './styles';

import sedans from '../../assets/images/icon-sedans.svg';
import suvs from '../../assets/images/icon-suvs.svg';
import luxury from '../../assets/images/icon-luxury.svg';

function Card({ product }) {
  let image;

  if (product.icon === 'sedans') {
    image = <img src={sedans} alt="Sedans" />;
  } else if (product.icon === 'suvs') {
    image = <img src={suvs} alt="Suvs" />;
  } else {
    image = <img src={luxury} alt="Luxury" />;
  }

  return (
    <Container bgcolor={product.bgcolor}>
      {image}
      <h1>{product.title}</h1>
      <p>{product.text}</p>
      <a href="/info">Learn More</a>
    </Container>
  );
}

export default Card;
