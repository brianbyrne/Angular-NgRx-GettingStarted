import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user';
import * as AppState from '../../state/app.state'

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
}

export interface State extends AppState.State {
  userState: UserState;
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] Mask User Name'), (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
