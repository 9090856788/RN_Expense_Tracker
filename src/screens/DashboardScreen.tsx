import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dashboardStyle } from '../styles/dashboardStyle';
import { Translation } from '../constant/constant';

const DashboardScreen: FC = () => {
  const expenseData: string | any[] = [];
  return (
    <SafeAreaView style={dashboardStyle.baseContainer}>
      <View style={dashboardStyle.container}>
        <Text style={dashboardStyle.greetingTitle}>
          {Translation.GREETING_TO_USER}
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
          <Text style={dashboardStyle.recentExpenseData}>
            {expenseData.length > 0
              ? expenseData[0].description
              : 'No recent expenses yet.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
