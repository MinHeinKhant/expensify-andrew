import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {
  startSetExpenses,
  removeExpense,
  setExpenses
} from './actions/expenses';
import { login, logout } from './actions/auth';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

// import '../playground/promises';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <AppRouter />
    </div>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    history.push('/');
    renderApp();
  }
});
