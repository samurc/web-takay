import React from 'react';
import { Grid, LayoutRow, Title, Description, Card } from './styles';
import imgFamily from '../../assets/img/familia.png';
import imgExperto from '../../assets/img/experto.png';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <Grid className="grid">
      <Title>¿Cúal es tu interés?</Title>
      <Description>Elige la opción con la que más te identifiques</Description>
      <LayoutRow>
        <Card className="card" to="/familia">
          <img src={imgFamily} width={84} height={84} />
          <h2>Quiero construir</h2>
          <p>Mi familia y yo tenemos un proyecto de construcción</p>
        </Card>

        <Card className="card" to="/experto">
          <img src={imgExperto} width={60} height={84} />
          <h2>Quiero prestar mis servicios</h2>
          <p>Soy un experto en construcción</p>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Info;
