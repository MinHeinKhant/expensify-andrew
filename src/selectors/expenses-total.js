export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, val) => sum + val, 0);

  //   let sum = 0;
  //   expenses.map(expense => {
  //     sum += expense.amount;
  //   });
  //   return sum;
};
