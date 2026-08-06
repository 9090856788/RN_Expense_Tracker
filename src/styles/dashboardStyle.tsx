import { Dimensions, StyleSheet } from 'react-native';

export const dashboardStyle = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 10,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  analyticsContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analytics: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.1,
  },
  recentExpenseContainer: {
    margin: 10,
    padding: 10,
  },
  recentExpenseText: {
    fontSize: 24,
    fontWeight: '500',
    margin: 10,
  },
  recentExpenseData: {
    fontSize: 18,
    fontWeight: '400',
    margin: 10,
  },
});
