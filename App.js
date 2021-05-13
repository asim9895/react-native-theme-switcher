import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Home from './screens/Home';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
