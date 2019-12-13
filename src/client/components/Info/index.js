import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, SpanTakay } from './styles';

const Info = () => {
  return (
    <Grid className="grid">
      <Box>
        <p>
          En <SpanTakay>TAKAY</SpanTakay> buscamos crear una red de servicios que mejoren la calidad
          de construcción para las familias que quieren hacer las cosas bien.
        </p>
        <div className="btn-more">
          <Link to="/nosotros">Ver más</Link>
        </div>
      </Box>
    </Grid>
  );
};

export default Info;
