import React from 'react';
import {Provider} from 'react-redux';
import initStore, {runSagaMiddleware} from './src/modules/store';
import Routes from './src/routes';

const store = initStore();
runSagaMiddleware();
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
