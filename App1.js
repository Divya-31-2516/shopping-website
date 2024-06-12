import React from 'react';
import { Container, Typography, List } from '@mui/material';
import CategoryList from './components/CategoryList';
import TypeaheadSearch from './components/TypeaheadSearch';
import './App.css';

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Shopping Website
      </Typography>
      <TypeaheadSearch />
      <List>
        <CategoryList />
      </List>
    </Container>
  );
}

export default App;
