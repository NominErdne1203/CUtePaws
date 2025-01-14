import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import * as React from 'react';
import { Text, View } from 'react-native';

const AppLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  if (!isSignedIn) return <Redirect href="/sign-in" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="create-post" />
    </Stack>
  );
};
export default AppLayout;
