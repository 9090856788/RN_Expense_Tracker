import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from '../styles/loginStyle';
import { Translation } from '../constant/constant';
import { navigate } from '../utils/NavigationUtil';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    navigate('Dashboard');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.title}>{Translation.TITLE}</Text>
        <TextInput
          style={loginStyle.input}
          placeholder={Translation.EMAIL}
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
