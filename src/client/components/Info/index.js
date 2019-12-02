import React from 'react';
import { Grid, Box } from './styles';

const Info = () => {
  return (
    <Grid className="grid">
      <Box>
        <p>
          En TAKAY buscamos crear una red de servicios que mejoren la calidad de construcción para
          las familias que quieren hacer las cosas bien.
        </p>
        <div className="btn-more">
          <a href="#">VER MÁS</a>
        </div>
      </Box>
    </Grid>
  );
};

export default Info;
