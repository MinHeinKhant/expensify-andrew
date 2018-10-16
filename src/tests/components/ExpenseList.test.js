import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList without expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
