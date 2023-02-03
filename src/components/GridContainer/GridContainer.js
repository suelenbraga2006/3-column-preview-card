import React from 'react';
import Card from '../Card/Card';

import { Container } from './styles';

function GridContainer() {
  return (
    <Container>
      <Card bgcolor="#E28625" icon="sedans" name="SEDANS" />
      <Card bgcolor="#006971" icon="suvs" name="SUVS" />
      <Card bgcolor="#004140" icon="luxury" name="LUXURY" />
    </Container>
  );
}

export default GridContainer;
