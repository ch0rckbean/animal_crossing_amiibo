import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// https://amiiboapi.com/

export default function ListItem({ amiiboList }) {
  return (
    <Container style={{ background: 'pink' }}>
      {amiiboList.length > 1 ? (
        <Row style={{ background: 'aqua' }}>
          {amiiboList.map((amiibo, idx) => {
            return (
              <Col md={4} lg={3}>
                <div key={idx}>
                  <img src={amiibo.image} alt='amiiboImg' />
                  <br></br>
                  이름: {amiibo.name}
                  <br></br>
                  타입: {amiibo.type}
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        <h3>주민들을 만나보세요!!</h3>
      )}
    </Container>
  );
}
