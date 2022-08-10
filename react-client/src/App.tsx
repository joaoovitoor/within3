import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/apolloClient';
import { useStyles } from './App.styles';
import { Zippopotam } from './components/Zippopotam';

function App() {
  const classes = useStyles()

  return (
    <ApolloProvider client={apolloClient}>
      <div className={classes.App}>
        <header className="App-header">
          <Zippopotam />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
