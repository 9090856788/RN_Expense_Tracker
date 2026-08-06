import { Dimensions, StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    margin: 50,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.06,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 5,
  },
  loginButton: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
