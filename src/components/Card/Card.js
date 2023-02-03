import React from 'react';
import { Container } from './styles';

import sedans from '../../assets/images/icon-sedans.svg';
import suvs from '../../assets/images/icon-suvs.svg';
import luxury from '../../assets/images/icon-luxury.svg';

function Card({ bgcolor, icon }) {
  let image;

  if (icon === 'sedans') {
    image = <img src={sedans} alt="Sedans" />;
  } else if (icon === 'suvs') {
    image = <img src={suvs} alt="Suvs" />;
  } else {
    image = <img src={luxury} alt="Luxury" />;
  }

  return (
    <Container bgcolor={bgcolor}>
      {image}
      <h1>Sedans</h1>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <a href="/info">Learn More</a>
    </Container>
  );
}

export default Card;
