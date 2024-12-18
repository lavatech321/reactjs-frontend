import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {
  return (
    <div>
      <Container className="mx-auto">
            <Header />
            <Cards />
      </Container>
    </div>
  )
}

export default Main
