import moment from 'moment';

export default [
  {
    id: '0',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '2',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
