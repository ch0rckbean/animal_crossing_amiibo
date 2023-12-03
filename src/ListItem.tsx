import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/ListItem';
import AmiiboItf from './AmiiboItf';
// https://amiiboapi.com/

interface ListItemProps {
  amiiboList: AmiiboItf[];
}

export default function ListItem({ amiiboList }: ListItemProps) {
  return (
    <Grid container>
      {amiiboList.length > 1 ? (
        amiiboList.map((amiibo, idx) => {
          return (
            <Grid
              style={{ background: 'green' }}
              key={idx}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={3}
            >
              <Item>
                <img src={amiibo.image} alt='amiiboImg' />
                <br></br>
                이름: {amiibo.name}
                <br></br>
                타입: {amiibo.type}
              </Item>
            </Grid>
          );
        })
      ) : (
        <Item>
          <h3>주민들을 만나보세요!!</h3>
        </Item>
      )}
    </Grid>
  );
}