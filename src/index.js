import React from 'react';
import ReactDOM from 'react-dom/client';
import PhonebookApp from './components/PhonebookApp';
import { Provider } from 'react-redux/es/exports';
import { persistor } from './redux/store';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PhonebookApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
