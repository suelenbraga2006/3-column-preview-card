import React from 'react';
import Card from '../Card/Card';

import { Container } from './styles';

function GridContainer() {
  return (
    <Container>
      <Card bgcolor="#E28625" icon="sedans" />
      <Card bgcolor="#006971" icon="suvs" />
      <Card bgcolor="#004140" icon="luxury" />
    </Container>
  );
}

export default GridContainer;
