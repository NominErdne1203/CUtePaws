import { useAuth, useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isSignedIn } = useAuth();

  if (isSignedIn ?? false) {
    router.push('/(app)/(tabs)');
  }
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInResponse = await signIn.create({
        identifier: username,
        password,
        strategy: 'password',
      });
      setActive({ session: signInResponse.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', gap: 20, padding: 20 }}>
      <View>
        <TextInput
          style={{ borderWidth: 1, padding: 20, color: 'black' }}
          placeholderTextColor={'black'}
          autoCapitalize="none"
          value={username}
          placeholder="Username..."
          onChangeText={(input) => setUsername(input)}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1, padding: 20, color: 'black' }}
          placeholderTextColor={'black'}
          autoCapitalize="none"
          secureTextEntry
          value={password}
          placeholder="Password..."
          onChangeText={(input) => setPassword(input)}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress} style={{ padding: 20, backgroundColor: 'green' }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Sign in</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: 'right' }}>
        Not have account{' '}
        <Link style={{ color: 'blue' }} href={'/sign-up'}>
          Register
        </Link>
      </Text>
    </View>
  );
}
// import { useAuth, useSignIn } from '@clerk/clerk - expo';
// import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';
// import * as React from 'react';
// import { Text, TextInput, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';

// export default function SignInScreen() {
//   const { signIn, setActive, isLoaded } = useSignIn();
//   const router = useRouter();
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const { isSignedIn } = useAuth();

//   if (isSignedIn ?? false) {
//     router.push('/(app)/(tabs)');
//   }
//   const onSignInPress = async () => {
//     if (!isLoaded) {
//       return;
//     }

//     try {
//       const signInResponse = await signIn.create({
//         identifier: username,
//         password,
//         strategy: 'password',
//       });
//       setActive({ session: signInResponse.createdSessionId });
//       router.push('/(app)/(tabs)');
//       console.log(signInResponse);
//     } catch (err: unknown) {
//       console.log(err);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <SafeAreaView style={styles.container}>
//         <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
//           <BlurView intensity={100} style={styles.blurContainer}>
//             <Text style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
//               Login
//             </Text>
//             <View
//               style={{
//                 flex: 1,
//                 alignContent: 'center',
//                 justifyContent: 'center',
//                 gap: 20,
//                 padding: 20,
//               }}>
//               <View>
//                 <TextInput
//                   style={{
//                     width: 250,
//                     borderColor: '#FF70BC',
//                     borderWidth: 1,
//                     borderRadius: 10,
//                     padding: 10,
//                     marginBottom: 30,
//                     color: '#000',
//                   }}
//                   placeholderTextColor="#000"
//                   autoCapitalize="none"
//                   value={username}
//                   placeholder="Username..."
//                   onChangeText={(input) => setUsername(input)}
//                 />
//               </View>
//               <View>
//                 <TextInput
//                   style={{
//                     width: 250,
//                     borderColor: '#FF70BC',
//                     borderWidth: 1,
//                     borderRadius: 10,
//                     padding: 10,
//                     marginBottom: 30,
//                     color: '#000',
//                   }}
//                   placeholderTextColor="black"
//                   autoCapitalize="none"
//                   value={password}
//                   secureTextEntry
//                   placeholder="Password..."
//                   onChangeText={(input) => setPassword(input)}
//                 />
//               </View>
//               <TouchableOpacity onPress={onSignInPress} style={{ alignItems: 'center' }}>
//                 <Text
//                   style={{
//                     width: 100,
//                     borderColor: '#FF70BC',
//                     borderWidth: 2,
//                     borderRadius: 10,
//                     padding: 10,
//                     marginBottom: 30,
//                     textAlign: 'center',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#FF70BC',
//                   }}>
//                   Sign in
//                 </Text>
//               </TouchableOpacity>
//               <Text onPress={() => router.push('../sign-in')}>Create an Account?</Text>
//             </View>
//           </BlurView>
//         </LinearGradient>
//       </SafeAreaView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   email: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     // width: '80%',
//   },
//   gradientContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     borderRadius: 20,
//   },
//   blurContainer: {
//     flex: 1,
//     top: 20,
//     margin: 90,
//     padding: 20,
//     textAlign: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     borderRadius: 20,
//   },
// });
