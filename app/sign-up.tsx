import { useAuth, useSignUp } from '@clerk/clerk-expo';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.create({
        username,
        password,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  if (isSignedIn ?? false) {
    router.push('/(app)/(tabs)');
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <Text style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
              Create Account
            </Text>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                gap: 20,
                padding: 20,
              }}>
              <View>
                <TextInput
                  style={{
                    width: 250,
                    borderColor: '#FF70BC',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 30,
                    color: '#000',
                  }}
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  value={username}
                  placeholder="Username..."
                  onChangeText={(username) => setUsername(username)}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    width: 250,
                    borderColor: '#FF70BC',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 30,
                    color: '#000',
                  }}
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  value={password}
                  secureTextEntry
                  placeholder="Password..."
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
              <TouchableOpacity onPress={onSignUpPress} style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    width: 100,
                    borderColor: '#FF70BC',
                    borderWidth: 2,
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 30,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF70BC',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
              <Text onPress={() => router.push('../sign-in')}>Already have an Account?</Text>
            </View>
          </BlurView>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    // width: '80%',
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
  },
  blurContainer: {
    flex: 1,
    top: 20,
    margin: 90,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
});
