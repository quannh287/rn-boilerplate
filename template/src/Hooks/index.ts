import React, { useEffect, useState } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { useTheme, AppTheme } from '@Theme/index';

type NetInfoTuple = [boolean, boolean];

function useNetWorkStatus(): NetInfoTuple {
  const [status, setStatus] = useState<boolean>(false);
  const [canAccess, setCanAccess] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setStatus(state.isConnected ?? false);
      setCanAccess(state.isInternetReachable ?? false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return [status, canAccess];
}

function useStyle<T>(style: (theme: AppTheme) => T): T {
  const theme = useTheme();
  return style(theme);
}

export { useNetWorkStatus, useStyle };
