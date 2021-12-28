import { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Store from './utils/store';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const store = new Store()

const State = {
  store: Store
}

export const Context = createContext ({
  store,
})

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <App />,
  </Context.Provider>,
  
  document.getElementById('root')
);
