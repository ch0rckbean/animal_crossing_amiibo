import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // https://amiiboapi.com/

export default function ListItem({ amiiboList }) {
  return (
    <Grid container style={{ background: 'pink', spacing: 0 }}>
      {amiiboList.length > 1 ? (
        amiiboList.map((amiibo, idx) => {
          return (
            <Grid
              style={{ background: 'green' }}
              key={idx}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={2}
            >
              <img src={amiibo.image} alt='amiiboImg' />
              <br></br>
              이름: {amiibo.name}
              <br></br>
              타입: {amiibo.type}
            </Grid>
          );
        })
      ) : (
        <h3>주민들을 만나보세요!!</h3>
      )}
    </Grid>
  );
}
