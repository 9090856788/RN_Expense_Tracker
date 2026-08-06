import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import LoginScreen from './src/screens/LoginScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import AddExpenseScreen from './src/screens/AddExpenseScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
