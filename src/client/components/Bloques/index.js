import React from 'react';
import { Grid, LayoutRow, Card, Detail } from './styles';
import imgFamily1 from '../../assets/img/nosotros1.png';
import imgFamily2 from '../../assets/img/nosotros2.png';
import imgFamily3 from '../../assets/img/nosotros3.png';

const Bloques = () => {
  return (
    <Grid className="grid">
      <LayoutRow>
        <Card className="card">
          <Detail className="detail">
            Somos un puente que conecta a las familia con un equipo de expertos que combinan
            conocimientos técnicos con años de experiencia en la construcción de hogares.
          </Detail>
          <div className="step">
            <img src={imgFamily1} width={84} height={84} />
            <h2>¿Qué hacemos?</h2>
          </div>
        </Card>
        <Card className="card">
          <Detail className="detail">
            Takay quiere romper el paradigma de la auto construcción como un proceso informal,
            empírico y sin estándares de calidad.
          </Detail>
          <div className="step">
            <img src={imgFamily2} width={84} height={84} />
            <h2>¿Por qué lo hacemos?</h2>
          </div>
        </Card>
        <Card className="card">
          <Detail className="detail">
            TAKAY nace como un proyecto interno de “La Cantera”, el departamento de Innovación de
            Cementos Pacasmayo. Buscando generar un impacto social relevante y ofrecer soluciones en
            construcción que contribuyan con el progreso del Perú
          </Detail>
          <div className="step">
            <img src={imgFamily3} width={84} height={84} />
            <h2>¿Quiénes somos?</h2>
          </div>
        </Card>
      </LayoutRow>
    </Grid>
  );
};

export default Bloques;
