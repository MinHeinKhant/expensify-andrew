import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    // Dispatch the action to edit the expense
    this.props.dispatch(startEditExpense(this.props.expense.id, expense));

    // Redirect to the dashboardpage
    this.props.history.push('/');
  };

  onRemove = () => {
    console.log('removed');
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />

        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

// const mapDispatchToProps = (dispatch, props) => ({
//   editExpense: (id, expense) => dispatch(editExpense(id, expense)),
//   startRemoveExpense: data => dispatch(startRemoveExpense(data))
// });

export default connect(mapStateToProps)(EditExpensePage);
