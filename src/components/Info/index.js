import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, SpanTakay } from './styles';

const Info = ({textos}) => {
  const texto = textos[0] || {};
  return (
    <Grid className="grid">
      <Box>
        <p dangerouslySetInnerHTML={{ __html: texto.textos }}/>
        <div className="btn-more">
          <Link to="/nosotros">Ver más</Link>
        </div>
      </Box>
    </Grid>
  );
};

export default Info;
