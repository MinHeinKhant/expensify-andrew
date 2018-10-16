import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[2].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const addedExpense = {
    id: '108',
    description: 'Added Expense',
    note: '',
    amount: 13400,
    createdAt: 55555
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: addedExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, addedExpense]);
});

test('should edit an expense', () => {
  const description = 'EDITED';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe('EDITED');
});

test('should not edit an expense if id not found', () => {
  const description = 'EDITED';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '033',
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
