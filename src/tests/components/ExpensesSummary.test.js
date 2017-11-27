import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('it should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={500} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('it should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={5} expensesTotal={1500} />
  );
  expect(wrapper).toMatchSnapshot();
});
