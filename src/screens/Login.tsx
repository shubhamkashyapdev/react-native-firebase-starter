import {Button, TextInput, View} from 'react-native';
import React from 'react';
import {PrimaryButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/typings/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
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
  const [confirm, setConfirm] =
    React.useState<FirebaseAuthTypes.ConfirmationResult>();
  const [code, setCode] = React.useState('');

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

  async function signInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (err) {
      console.log({err});
    }
  }
  async function confirmCode() {
    try {
      await confirm?.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  // Handle login
  function onAuthStateChanged(fireUser: FirebaseAuthTypes.User | null) {
    if (fireUser) {
      console.log({fireUser});
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
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
        <PrimaryButton
          handleClick={() => signInWithPhoneNumber('+917973765944')}>
          Signin
        </PrimaryButton>
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </View>
  );
};

export default Login;
