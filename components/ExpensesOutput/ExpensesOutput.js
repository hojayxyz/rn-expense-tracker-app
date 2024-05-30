import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 19.99,
    date: new Date('2024-05-28'),
  },
  {
    id: 'e2',
    description: 'Cakes',
    amount: 29.99,
    date: new Date('2024-05-29'),
  },
  {
    id: 'e3',
    description: 'Sparking Water',
    amount: 59.99,
    date: new Date('2024-05-30'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 9.99,
    date: new Date('2024-05-30'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
