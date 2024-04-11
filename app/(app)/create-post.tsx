import { useUser } from '@clerk/clerk-expo';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { useCreatePostMutation } from '@/graphql/generated';

// import { useCreatePostMutation } from '@/graphql/generated';

export default function CreatePost(): React.JSX.Element {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();
  const [phoneNum, setPhoneNum] = useState('');

  const { user } = useUser();

  // const [ShowImage, setShowImage] = useState(false);

  const router = useRouter();

  const [CreatePostMutation] = useCreatePostMutation();

  const handleSubmit = async (): Promise<void> => {
    console.log('phoneNum:', phoneNum);
    CreatePostMutation({
      variables: {
        input: {
          title,
          phoneNum: Number(phoneNum),
        },
      },
      onError: (error) => {
        console.error(JSON.stringify(error, null, 2));
      },
      onCompleted: (data) => {
        console.log(data);
      },
    });
  };

  const handleChangeText = (text: React.SetStateAction<string>): void => {
    setTitle(text);
  };
  // const handleChangeNumber = (number: React.SetStateAction<number>): void => {
  //   setPhoneNum(number);
  // };

  // const handleSubmit = (): void => {
  //   // if (text.trim()) {
  //   //   console.log('Post submitted:', CreatePost);
  //   //   setText('');
  //   // }
  //   console.log('Post submitted:', CreatePost);
  // };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const chosenImage = result.assets[0];
      setImage(chosenImage);
      const data = new FormData();
      // @ts-ignore
      data.append('file', {
        name: 'file',
        type: chosenImage.type,
        uri: chosenImage.uri,
      });

      axios
        .post(`http://localhost:3000/api/file`, data)
        .then((response) => {
          console.log('response', response.data);
        })
        .catch((error: unknown) => {
          console.log(JSON.stringify(error, null, 2));
        });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Text onPress={() => router.push('../')}>
            <Image
              width={200}
              height={200}
              source={require('../../assets/images/icons8-back-30.png')}
            />
          </Text>
          <Text style={styles.email}>CreatePost</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 140,
            }}
            onPress={handleSubmit}>
            Next
          </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Image
            style={{ width: 50, height: 50, margin: 10, marginLeft: 20, borderRadius: 100 }}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
            }}
          />
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              fontSize: 20,
            }}>
            {user?.username}
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={{
              paddingHorizontal: 20,
              paddingVertical: 40,
              fontSize: 20,
              width: '100%',
            }}
            value={title}
            onChangeText={handleChangeText}
            placeholder="Create post"
          />
          <View>
            <Text onPress={pickImage}>
              <Image
                style={{ width: 50, height: 50, marginLeft: 20 }}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/007/567/154/original/select-image-icon-vector.jpg',
                }}
              />
            </Text>
          </View>
        </View>
        <View>
          <View>
            <TextInput
              style={{
                paddingHorizontal: 20,
                paddingVertical: 40,
                fontSize: 20,
                width: '100%',
              }}
              keyboardType="numeric"
              onChangeText={(e) => {
                setPhoneNum(e);
              }}
              placeholder="Add Phone Number"
              value={phoneNum}
            />
          </View>
          {image && (
            <View>
              <Image source={{ uri: image.uri }} style={{ width: 100, height: 100, top: 10 }} />
              {/* <Text title="upload" onPress={uploadImage}></Text> */}
              <Text onPress={() => setImage(false)}>cancel</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#FFC9E6',
    paddingTop: 50,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  gradientContainer: {
    flex: 1,
    // justifyContent: 'center',
    borderRadius: 20,
  },
  input: {
    width: '100%',
    // height: ,
  },
});

// http://192.168.12.96:3000/api/file
