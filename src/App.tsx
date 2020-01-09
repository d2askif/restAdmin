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
import { PersistGate } from 'redux-persist/integration/react';

const browserHistory = createBrowserHistory();
const { store, persistor } = createStore();
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
              <PersistGate loading={null} persistor={persistor}>
                <Routes></Routes>
              </PersistGate>
            </Router>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
