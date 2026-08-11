import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addExpenseStyle } from '../styles/addExpenseStyle';
import { Translation } from '../constant/constant';
import { navigate } from '../utils/NavigationUtil';
import { storage } from '../utils/storage';

const AddExpenseScreen = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSaveExpense = async () => {
    try {
      if (!description || !amount) {
        Alert.alert('Please fill all the details');
        return;
      }
      const existingExpense = await storage.getItem('@expense');
      // if (existingExpense !== null) {
      const list = existingExpense ? JSON.parse(existingExpense) : [];
      // }
      const newExpense = {
        id: Date.now(),
        description,
        amount,
        createOn: new Date().toISOString().slice(0, 10),
      };
      list.push(newExpense);
      await storage.setItem('@expense', JSON.stringify(list));
      Alert.alert('Expense added successfully');
      setAmount('');
      setDescription('');
      navigate('Home');
    } catch (error) {
      console.error('There is some error occur', error);
    }
  };

  return (
    <SafeAreaView style={addExpenseStyle.container}>
      <View style={addExpenseStyle.inputContainer}>
        <Text style={addExpenseStyle.title}>{Translation.ADD_EXPENSE}</Text>
        <TextInput
          style={addExpenseStyle.input}
          placeholder="Enter expense description"
          placeholderTextColor="grey"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          style={addExpenseStyle.input}
          placeholder="Enter expense amount"
          placeholderTextColor="grey"
          value={amount}
          onChangeText={text => setAmount(text)}
        />

        <TouchableOpacity
          onPress={handleSaveExpense}
          style={addExpenseStyle.saveButton}
        >
          <Text style={addExpenseStyle.saveButtonText}>{Translation.SAVE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddExpenseScreen;
