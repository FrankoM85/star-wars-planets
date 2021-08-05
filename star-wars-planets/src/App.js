import './App.css';
import React, { useState, useEffect } from 'react';
import BasicTable from './components/table';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';


function App() {

  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  
  useEffect (() => {
    async function fetchPlanets() {
      let res = await fetch (`https://swapi.dev/api/planets/?format=json&page=${page}`);
      let data = await res.json()
      setPlanets(data.results);
      console.log(planets)
    }
  
    fetchPlanets();
    setLoading(false);
  }, [page]);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
        
        <Button className="navigationBtn" variant="contained" color="primary" onClick={() => page === 1 ? page : setPage(page-1)}>
        Previous      
        </Button>
        <Button className="navigationBtn" variant="contained" color="primary" onClick={() => page === 6 ? page : setPage(page+1)}>
        Next      
        </Button>
        <Container>
        {loading ? (
          <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        ) : (
          <>
          <BasicTable data={planets}/>
          </>
          )}
        </Container>
    </div>
  );
}

export default App;

