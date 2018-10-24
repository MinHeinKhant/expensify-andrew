import './firebase/firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {
  startSetExpenses,
  removeExpense,
  setExpenses
} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// import '../playground/promises';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <AppRouter />
    </div>
  </Provider>
);

ReactDOM.render(<p>loading..</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
