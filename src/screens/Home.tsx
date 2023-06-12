import {View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/typings/types';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../components';

const Home = () => {
  type LoginNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<LoginNavigation>();
  function handleNavigate() {
    navigation.navigate('Profile');
  }
  return (
    <View className="flex-1">
      <View className="mt-10 bg-indigo-300 h-[200px] justify-center items-center">
        <PrimaryButton handleClick={handleNavigate}>Home</PrimaryButton>
      </View>
    </View>
  );
};

export default Home;
