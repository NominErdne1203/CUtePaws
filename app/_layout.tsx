import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import React from 'react';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://full-backend-six.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ClerkProvider publishableKey={'pk_test_cmVmaW5lZC1raXRlLTgxLmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <ApolloProvider client={client}>
        <Slot />
      </ApolloProvider>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
