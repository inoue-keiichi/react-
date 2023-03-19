import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';

import { type FC, type PropsWithChildren } from 'react';
import { counterSlice } from './stores/counter';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: counterSlice.reducer });
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ChakraProvider>
  </HelmetProvider>
);

export default Providers;
