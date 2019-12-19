import React from 'react';
import { Grid, LayoutRow, Card, Detail } from './styles';

const Bloques = ({textos}) => {
  const texto1 = textos[2] || {};
  const texto2 = textos[1] || {};
  const texto3 = textos[0] || {};
  return (
    <Grid className="grid">
      <LayoutRow>
        <Card className="card">
          <Detail className="detail">
            { texto1.descripcion }
          </Detail>
          <div className="step">
            <img src={texto1.imagen} width={84} height={84} />
            <h2>{ texto1.titulo }</h2>
          </div>
        </Card>
        <Card className="card">
          <Detail className="detail">
            { texto2.descripcion }
          </Detail>
          <div className="step">
            <img src={texto2.imagen} width={84} height={84} />
            <h2>{ texto2.titulo }</h2>
          </div>
        </Card>
        <Card className="card">
          <Detail className="detail">
            { texto3.descripcion }
          </Detail>
          <div className="step">
            <img src={texto3.imagen} width={84} height={84} />
            <h2>{ texto3.titulo }</h2>
          </div>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Bloques;
