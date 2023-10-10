import React, { useState } from 'react';
import ListItem from './ListItem';
import axios from 'axios';

export default function List() {
  const [amiiboList, setAmiiboList] = useState([]);
  const getAmiibos = async () => {
    const amiibos = await axios({
      method: 'GET',
      url: 'https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal Crossing',
    });
    // console.log('amiibos.data.amiibo', amiibos.data.amiibo); //type: object
    // console.log('amiiboList', amiiboList);
    // console.log('amiiboList', typeof amiiboList); //object
    setAmiiboList(amiibos.data.amiibo);
  };
  return (
    <div>
      <h1>동물의 숲 아미보엔 누가 있을까요?</h1>
      <button onClick={getAmiibos}>아미보 구경하기!</button>
      <ListItem amiiboList={amiiboList} />
    </div>
  );
}
