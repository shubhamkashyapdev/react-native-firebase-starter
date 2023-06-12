import {createAuthStore} from './authStore';
import {create} from 'zustand';
import {CombineStore} from './store';

export const useStore = create<CombineStore>()((...a) => ({
  ...createAuthStore(...a),
}));
