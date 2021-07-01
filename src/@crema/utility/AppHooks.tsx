import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchStart, fetchSuccess, setJWTToken} from '../../redux/actions';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import jwtAxios from '../services/auth/jwt-auth/jwt-api';
import {AppState} from '../../redux/store';
import {UPDATE_AUTH_USER} from '../../types/actions/Auth.actions';
import {AuthUser} from '../../types/models/AuthUser';

export const useAuthToken = (): [boolean, AuthUser | null] => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {user} = useSelector<AppState, AppState['auth']>(({auth}) => auth);

  useEffect(() => {
    const validateAuth = async () => {
      dispatch(fetchStart());
      const token = localStorage.getItem('token');
      if (!token) {
        dispatch(fetchSuccess());
        return;
      }
      dispatch(setJWTToken(token));
      try {
        const res = await jwtAxios.get('/auth');
        dispatch(fetchSuccess());
        dispatch({
          type: UPDATE_AUTH_USER,
          payload: {
            authType: AuthType.JWT_AUTH,
            displayName: res.data.name,
            email: res.data.email,
            role: defaultUser.role,
            token: res.data._id,
            photoURL: res.data.avatar,
          },
        });
        return;
      } catch (err) {
        dispatch(fetchSuccess());
        return;
      }
    };

    const checkAuth = () => {
      Promise.all([validateAuth()]).then(() => {
        setLoading(false);
      });
    };
    checkAuth();
  }, [dispatch]);

  return [loading, user];
};

export const useAuthUser = (): AuthUser | null => {
  const {user} = useSelector<AppState, AppState['auth']>(({auth}) => auth);
  if (user) {
    return user;
  }
  return null;
};
