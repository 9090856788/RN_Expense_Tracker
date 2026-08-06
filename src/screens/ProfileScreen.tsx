import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileStyle } from '../styles/profileStyle';
import { Avatar } from '@kolking/react-native-avatar';
import { Translation } from '../constant/constant';

const ProfileScreen = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleUpdateProfile = () => {
    // Handle profile update logic here
  };
  return (
    <SafeAreaView style={profileStyle.baseContainer}>
      <View style={profileStyle.container}>
        {/* User Profile Screen */}
        <View style={profileStyle.avatarContainer}>
          <Avatar
            size={100}
            radius={50}
            source={require('../assets/images/Kanhu.jpg')}
            name="Kanhu Charan Sahoo"
            style={profileStyle.avatar}
          />
        </View>
        <View style={profileStyle.profileUpdateContainer}>
          <View style={profileStyle.profileDetails}>
            {/* User First Name */}
            <Text style={profileStyle.profileDetails_text}>First Name : </Text>
            <TextInput
              style={profileStyle.profileDetails_input}
              placeholder="Enter First Name"
              placeholderTextColor="grey"
              value={userData.firstName}
              onChangeText={text =>
                setUserData({ ...userData, firstName: text })
              }
            />
          </View>

          <View style={profileStyle.profileDetails}>
            {/* User Last Name */}
            <Text style={profileStyle.profileDetails_text}>Last Name : </Text>
            <TextInput
              style={profileStyle.profileDetails_input}
              placeholder="Enter Last Name"
              placeholderTextColor="grey"
              value={userData.lastName}
              onChangeText={text =>
                setUserData({ ...userData, lastName: text })
              }
            />
          </View>

          <View style={profileStyle.profileDetails}>
            {/* User Email */}
            <Text style={profileStyle.profileDetails_text}>Email : </Text>
            <TextInput
              style={profileStyle.profileDetails_input}
              placeholder="Enter Email"
              placeholderTextColor="grey"
              value={userData.email}
              onChangeText={text => setUserData({ ...userData, email: text })}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleUpdateProfile}
          style={profileStyle.profileUpdateButton}
        >
          <Text style={profileStyle.profileUpdateButtonText}>
            {Translation.UPDATE_PROFILE}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleUpdateProfile}
          style={profileStyle.profileUpdateButton}
        >
          <Text style={profileStyle.profileUpdateButtonText}>
            {Translation.LOGOUT}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
