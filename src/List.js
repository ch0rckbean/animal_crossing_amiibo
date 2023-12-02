import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import axios from 'axios';

export default function List() {
  const [clicked, setClicked] = useState(false);
  const [display, setDisplay] = useState('block');
  const [amiiboList, setAmiiboList] = useState([]);

  const getAmiibos = async () => {
    const amiibos = await axios({
      method: 'GET',
      url: 'https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal Crossing',
    });
    setAmiiboList(amiibos.data.amiibo);
  };
  useEffect(() => {
    if (clicked) {
      getAmiibos();
      setClicked(false);
      setDisplay('none');
    }
  }, [clicked]);

  return (
    <div>
      <h1 style={{ display: display }}>동물의 숲에는 누가 살고 있을까요?</h1>
      <button style={{ display: display }} onClick={() => setClicked(true)}>
        주민 구경하기!
      </button>
      <ListItem amiiboList={amiiboList} />
    </div>
  );
}
