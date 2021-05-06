import ListTimers from "./components/ListTimers";
import { loadState, saveState } from './utils';
import reducers from "./reducers/index";
import throttle from 'lodash/throttle';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { update } from "./actions";
import NewTimer from "./NewTimer";
import React from "react";
import "./App.css";

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 50);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TMRZ</h1>
        {/* Display the new components */}
        <NewTimer />
        <ListTimers />
      </div>
    </Provider>
  );
}

export default App;
