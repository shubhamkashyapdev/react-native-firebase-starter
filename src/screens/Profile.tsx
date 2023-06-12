import {View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/typings/types';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../components';

const Profile = () => {
  type LoginNavigation = NativeStackNavigationProp<
    RootStackParamList,
    'Profile'
  >;
  const navigation = useNavigation<LoginNavigation>();
  function handleNavigate() {
    navigation.navigate('Login');
  }
  return (
    <View className="flex-1">
      <View className="mt-10 bg-indigo-300 h-[200px] justify-center items-center">
        <PrimaryButton handleClick={handleNavigate}>Profile</PrimaryButton>
      </View>
    </View>
  );
};

export default Profile;
