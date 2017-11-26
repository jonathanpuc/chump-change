import moment from 'moment';
import sumExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('it should return 0 if no expenses', () => {
  const result = sumExpenses([]);
  expect(result).toEqual(0);
});

test('it should correctly add up a single expense', () => {
  const result = sumExpenses([expenses[0]]);
  expect(result).toEqual(195);
});

test('it should correctly add up multiple expenses', () => {
  const result = sumExpenses(expenses);
  expect(result).toEqual(114195);
});
