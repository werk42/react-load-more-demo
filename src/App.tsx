import React from 'react';
import Container from '@material-ui/core/Container';
import List from './components/List/List';
import Header from './components/Header/Header';

function App() {
  return (
    <Container maxWidth='sm'>
        <Header title={'Star Wars Starships'} />
        <List />
    </Container>
  );
}

export default App;
