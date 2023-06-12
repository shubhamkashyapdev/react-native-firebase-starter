import {StateCreator} from 'zustand';
import {AuthStore, CombineStore, UserType} from './store';

export const createAuthStore: StateCreator<
  CombineStore,
  [],
  [],
  AuthStore
> = set => ({
  user: undefined,
  setUser: (user: UserType) => set({user}),
});
