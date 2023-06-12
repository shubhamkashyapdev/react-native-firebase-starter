import {User} from '@react-native-google-signin/google-signin';

type Theme = 'dark' | 'light';

type UserType = User;

type AuthStore = {
  user: User | undefined;
  setUser: (user: User) => void;
};

type CombineStore = AuthStore;
