import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('should generate setStartDate action object', () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('should generate setEndDate action object', () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  });
});

test('should generate setTextFilter with PROVIDED text', () => {
  const text = 'test text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate setTextFilter with DEFAULT text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});
test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
