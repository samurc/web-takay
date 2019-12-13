import React from 'react';
import { Grid, LayoutRow, Card } from './styles';
import imgFamily1 from '../../assets/img/nosotros1.png';
import imgFamily2 from '../../assets/img/nosotros2.png';
import imgFamily3 from '../../assets/img/nosotros3.png';

const Bloques = () => {
  return (
    <Grid className="grid">
      <LayoutRow>
        <Card className="card">
          <img src={imgFamily1} width={84} height={84} />
          <h2>¿Qué hacemos?</h2>
        </Card>
        <Card className="card">
          <img src={imgFamily2} width={84} height={84} />
          <h2>¿Por qué lo hacemos?</h2>
        </Card>
        <Card className="card">
          <img src={imgFamily3} width={60} height={84} />
          <h2>¿Quiénes somos?</h2>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Bloques;
