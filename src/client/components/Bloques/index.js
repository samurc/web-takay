import React from 'react';
import { Grid, LayoutRow, Card } from './styles';
import imgFamily from '../../assets/img/familia.png';
import imgExperto from '../../assets/img/experto.png';

const Bloques = () => {
  return (
    <Grid className="grid">
      <LayoutRow>
        <Card className="card">
          <img src={imgFamily} width={84} height={84} />
          <h2>Quiero construir</h2>
        </Card>
        <Card className="card">
          <img src={imgFamily} width={84} height={84} />
          <h2>Quiero construir</h2>
        </Card>
        <Card className="card">
          <img src={imgExperto} width={60} height={84} />
          <h2>Quiero prestar mis servicios</h2>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Bloques;
