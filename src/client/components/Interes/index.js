import React from 'react';
import { Grid, LayoutRow, Title, Description, Card } from './styles';

const Info = () => {
  return (
    <Grid className="grid">
      <Title>¿Cúal es tu interés?</Title>
      <Description>Elige la opción con la que más te identifiques</Description>
      <LayoutRow>
        <Card className="card">
          <i className="material-icons">people</i>
          <h2>Quiero construir</h2>
          <p>Mi familia y yo tenemos un proyecto de construcción</p>
        </Card>
        <Card className="card">
          <i className="material-icons">emoji_people</i>
          <h2>Quiero prestar mis servicios</h2>
          <p>Soy un experto en construcción</p>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Info;
