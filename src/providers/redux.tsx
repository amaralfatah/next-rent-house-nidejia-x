// redux.ts
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { SessionProvider } from 'next-auth/react';

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default ReduxProvider;
