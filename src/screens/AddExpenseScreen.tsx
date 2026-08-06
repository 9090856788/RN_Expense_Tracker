import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addExpenseStyle } from '../styles/addExpenseStyle';
import { Translation } from '../constant/constant';

const AddExpenseScreen = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const handleSave = () => {};
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
          onPress={handleSave}
          style={addExpenseStyle.saveButton}
        >
          <Text style={addExpenseStyle.saveButtonText}>{Translation.SAVE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddExpenseScreen;
