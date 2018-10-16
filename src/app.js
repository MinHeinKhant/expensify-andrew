import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(addExpense({ description: 'water bill', amount: 30000 }));
store.dispatch(
  addExpense({ description: 'rent', amount: 195000, createdAt: 1000 })
);
store.dispatch(addExpense({ description: 'gas bill', amount: 70000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(setTextFilter('water'));
// console.log(expenseOne);

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <div>
      <AppRouter />;
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
