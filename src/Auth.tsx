import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, listenAuthState } from './redux/modules/users';
import { HomeGuest } from './templates';
import { LoadingIcon } from './components/UIkit';

const Auth: FC = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { isSignedIn, isFetching } = user;

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, [isSignedIn, dispatch]);

  if (isFetching) {
    return <LoadingIcon />;
  }

  if (!isSignedIn) {
    return <HomeGuest />;
  } else {
    return <>{children}</>;
  }
};

export default Auth;
