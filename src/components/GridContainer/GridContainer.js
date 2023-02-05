import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import { Container } from './styles';

function GridContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/products.json')
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  return (
    <Container>
      {products.map((product, i) => {
        return <Card key={i} bgcolor="#E28625" product={product} />;
      })}
    </Container>
  );
}

export default GridContainer;
