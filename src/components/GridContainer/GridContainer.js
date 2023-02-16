import React from 'react';
import Card from '../Card/Card';

import { Container } from './styles';

function GridContainer() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/static/products.json')
  //     .then((response) => response.json())
  //     .then(setProducts);
  // }, []);

  const products = [
    {
      icon: 'sedans',
      title: 'SEDANS',
      text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      bgcolor: '#E28625',
    },
    {
      icon: 'suvs',
      title: 'SUVS',
      text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      bgcolor: '#006971',
    },
    {
      icon: 'luxury',
      title: 'LUXURY',
      text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
      bgcolor: '#004140',
    },
  ];

  return (
    <Container>
      {products.map((product, i) => {
        return <Card key={i} bgcolor="#E28625" product={product} />;
      })}
    </Container>
  );
}

export default GridContainer;
