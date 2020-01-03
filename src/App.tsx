import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import createStore from '../src/redux/store';

import './assets/scss/index.scss';
import { Router } from 'react-router-dom';
import Routes from './route/Routes';
import Navigation from '../src/components/Navigation';
import theme from './theme';

import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const link = createUploadLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const browserHistory = createBrowserHistory();
const store = createStore();
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          <Navigation></Navigation>
        </Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
              <ApolloProvider client={client}>
                <Routes></Routes>
              </ApolloProvider>
            </Router>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
