import {View} from 'react-native';
import React from 'react';
import {PrimaryButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/typings/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WEB_CLIENT_ID} from '@env';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useStore} from '../store';
GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const Login = () => {
  type LoginNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<LoginNavigation>();
  const {setUser, user} = useStore();
  function handleNavigate() {
    navigation.navigate('Home');
  }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View className="flex-1">
      <View className="mt-10 bg-indigo-300 h-[200px] justify-center items-center">
        <PrimaryButton handleClick={handleNavigate}>
          {user ? `Sign Out ${user.user.name}` : 'Login'}
        </PrimaryButton>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      </View>
    </View>
  );
};

export default Login;
