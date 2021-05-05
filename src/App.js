import ListTimers from './components/ListTimers';
import NewTimer from './NewTimer';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import './App.css';


const store = createStore(reducers);

function App() {
  return (
      <Provider store={store}>
        <div className='App'>
          <h1>TMRZ</h1>
          {/* Display the new components */}
          <NewTimer />
          <ListTimers />
        </div>
      </Provider>
  );
}

export default App;
