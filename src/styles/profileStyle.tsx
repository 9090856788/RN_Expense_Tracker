import { Dimensions, StyleSheet } from 'react-native';

export const profileStyle = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginTop: 10,
    gap: 10,
  },
  profileUpdateContainer: {
    justifyContent: 'flex-start',
    marginTop: 50,
    gap: 10,
  },
  profileDetails_text: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
  profileDetails_input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.06,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  profileUpdateButton: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
  profileUpdateButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
