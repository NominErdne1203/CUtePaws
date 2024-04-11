import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import * as React from 'react';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'http://192.168.11.138:3000/api/graphql',
    // uri: 'http://:3000/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ClerkProvider publishableKey="pk_test_cmVmaW5lZC1raXRlLTgxLmNsZXJrLmFjY291bnRzLmRldiQ">
      <ApolloProvider client={client}>
        <Slot />
      </ApolloProvider>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
