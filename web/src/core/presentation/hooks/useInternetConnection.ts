/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setInternetConnectionState } from '../store/slices/web/web-slice';

export const useInternetConnection = () => {
  const dispatch = useAppDispatch();

  const setOnline = () => dispatch(setInternetConnectionState(true));

  const setOffline = () => dispatch(setInternetConnectionState(false));

  useEffect(() => {
    dispatch(setInternetConnectionState(navigator.onLine));
  }, []);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
};
