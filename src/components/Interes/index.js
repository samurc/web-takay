import React from 'react';
import { Grid, LayoutRow, Title, Description, Card } from './styles';
import imgFamily from '../../assets/img/familia.png';
import imgExperto from '../../assets/img/experto.png';
import { Link } from 'react-router-dom';

const Info = ({textos}) => {
  console.log(textos);
  const texto1 = textos[1] || {};
  const texto2 = textos[0] || {};
  return (
    <Grid className="grid">
      <Title>¿Cúal es tu interés?</Title>
      <Description>Elige la opción con la que más te identifiques</Description>
      <LayoutRow>
        <Card className="card" to="/familia">
          <img src={texto1.imagen} width={84} height={84} />
          <h2>{texto1.titulo}</h2>
          <p>{texto1.descripcion}</p>
        </Card>

        <Card className="card" to="/experto">
          <img src={texto2.imagen} width={60} height={84} />
          <h2>{texto2.titulo}</h2>
          <p>{texto2.descripcion}</p>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Info;
