import BackIcon from '@/assets/images/back';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
export default function PostPage(): React.JSX.Element {
  const phoneNumber = '99305757'; // Replace with your phone number

  const handlePhoneCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                left: 20,
                marginBottom: 20,
              }}>
              <Text onPress={() => router.back()}>
                <BackIcon />
              </Text>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '100%',
                }}>
                <Image
                  style={{ width: 50, height: 50, margin: 10, borderRadius: 100 }}
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
                  }}
                />
                <Text
                  style={{
                    width: 240,
                    paddingHorizontal: 10,
                  }}>
                  ner
                </Text> */}
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                margin: 10,
                paddingLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingTop: 10,
                }}>
                Muur nohoigoo 1 honog haruulna
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                margin: 10,
                paddingLeft: 20,
              }}>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../assets/images/phone-call.png')}
              />
              <Text
                onPress={handlePhoneCall}
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  // color: 'blue',
                }}>
                {phoneNumber}
              </Text>
            </View>
            <Image
              style={{ width: '100%', height: 500, marginTop: 10 }}
              source={{
                uri: 'https://i.pinimg.com/originals/04/5b/f4/045bf4ec3e19c54adc179eaff757e6d2.jpg',
              }}
            />
          </View>
          {/* </View> */}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#FFC9E6',
    paddingTop: 60,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradientContainer: {
    flex: 1,
  },
});
