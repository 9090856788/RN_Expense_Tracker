import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from '../styles/loginStyle';
import { Translation } from '../constant/constant';
import { replace } from '../utils/NavigationUtil';
import { storage } from '../utils/storage';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Handle login logic here
    if (!email || !password) {
      Alert.alert('Please fill all the input field details');
      return;
    }
    try {
      await storage.setItem('@username', email);
      replace('Dashboard');
    } catch (error) {
      console.error('Unable to store the information', error);
    }
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.title}>{Translation.TITLE}</Text>
        <TextInput
          style={loginStyle.input}
          placeholder={Translation.USERNAME}
          placeholderTextColor="black"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={loginStyle.input}
          placeholder={Translation.PASSWORD}
          placeholderTextColor="black"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={loginStyle.loginButton}>
          <Text style={loginStyle.loginButtonText}>{Translation.LOGIN}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
