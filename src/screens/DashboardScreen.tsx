import { View, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dashboardStyle } from '../styles/dashboardStyle';
import { Translation } from '../constant/constant';
import { storage } from '../utils/storage';
import { FlatList } from 'react-native-gesture-handler';

const DashboardScreen: FC = () => {
  const [username, setUsername] = useState('');
  const [expense, setExpense] = useState<any[]>([]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await storage.getItem('@username');
        if (userDetails !== null) {
          setUsername(userDetails);
        }
      } catch (error) {
        console.error('Unable to retrieve the information', error);
      }
    };
    getUserDetails();
  });
  useEffect(() => {
    const getExpense = async () => {
      const listOfExpense = await storage.getItem('@expense');
      const list = listOfExpense ? JSON.parse(listOfExpense) : [];
      setExpense(list);
    };
    getExpense();
  }, [expense]);

  return (
    <SafeAreaView style={dashboardStyle.baseContainer}>
      <View style={dashboardStyle.container}>
        <Text style={dashboardStyle.greetingTitle}>
          {Translation.GREETING_TO_USER} {username}
        </Text>
        <View style={dashboardStyle.analyticsContainer}>
          {/* Daily Expense Analytics */}
          <View style={dashboardStyle.analytics}>
            <Text>Daily Expense Analytics</Text>
          </View>

          {/* Monthly Expense Analytics */}
          <View style={dashboardStyle.analytics}>
            <Text>Monthly Expense Analytics</Text>
          </View>
        </View>
        <View style={dashboardStyle.recentExpenseContainer}>
          <Text style={dashboardStyle.recentExpenseText}>
            {Translation.RECENT_EXPENSES}
          </Text>
          <View style={dashboardStyle.recentExpenseData}>
            {expense.length > 0 ? (
              <FlatList
                data={expense}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.description}</Text>
                    <Text>{item.amount}</Text>
                  </View>
                )}
              />
            ) : (
              <View>
                <Text>No Expense</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
