import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './Translations';
import ApplicationNavigator from '@Navigators/Application';
import BootSplash from 'react-native-bootsplash';
import { persistor, store } from '@Redux/index';

const App = () => {
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
