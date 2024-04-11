import BackIcon from '@/assets/images/back';
import { useUser } from '@clerk/clerk-expo';
import * as ImagePicker from 'expo-image-picker';
// import { Link } from 'expo-router';
// import { stringify } from 'querystring';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

// import { useUpdateUserMutation } from '@/graphql/generated';
// import { useCurrentUser } from '@/hooks/useCurrentUser';
// import { useUpdateUserMutation } from '@/graphql/generated';

export default function TwoJapa(): React.JSX.Element {
  // const { setUser, user } = useCurrentUser();
  const [name, setName] = useState();
  const [bio, setBio] = useState('add bio');
  const [image, setImage] = useState(
    'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isBioe, setIsBioe] = useState(false);
  const searchParams = useGlobalSearchParams();
  console.log(JSON.stringify(searchParams, null, 2));
  const router = useRouter();
   const { user } = useUser();

  //   const [UpdateUserMutaion, { data, loading, error }] = useUpdateUserMutation();

  //   if (loading) return <Text>Loading</Text>;
  //   if (error) return <Text>{error.message}</Text>;

  // const [localUser, setLocalUser] = useState(() => {
  //   if (Boolean(user)) return user;
  //   return {
  //     id: '',
  //     name: '',
  //     email: '',
  //     image: '',
  //     bio: '',
  //   };
  // });

  // useEffect(() => {
  //   if (Boolean(user)) {
  //     setName(Boolean(user?.name) || '');
  //     setBio(Boolean(user?.bio) || '');
  //     setImage(user?.image || '');
  //     setLocalUser(user);
  //   }
  // }, [user]);

  const handleBioChange = (text: React.SetStateAction<string>): void => {
    setBio(text);
    setIsBioe(true);
  };
  const handleChangeText = (text: React.SetStateAction<string>): void => {
    setName(text);
  };

  const handleDonePress = (): void => {
    if (bio === '') {
      setIsBioe(true);
    } else {
      // setBio(bio)
      setIsBioe(!isBioe);
    }
  };

  const handleInputFocus = (): void => {
    setIsBioe(isBioe);
  };

  const handleEdit = (): void => {
    setIsEditing(!isEditing);
  };

  const handleSave = (): void => {
    setIsEditing(!isEditing);
    setImage(image)
    // localUser.name = name;
    // localUser.image = image;
    // localUser.bio = bio;
    // setUser(localUser);
  };

  //   const uploadImage = async () => {
  //     if (image) {
  //       const data = new FormData();
  //       // @ts-ignore
  //       data.append('image', {
  //         name: 'image',
  //         type: image.type,
  //         uri: image.uri,
  //       });

  //       fetch(`http://192.168.12.96:3000/api/file/upload`, {
  //         method: 'POST',
  //         body: data,
  //       })
  //         .then((response) => response.json())
  //         .then((response) => {
  //           console.log('response', response);
  //         })
  //         .catch((error: unknown) => {
  //           console.log(JSON.stringify(error, null, 2));
  //         });
  //     }
  //   };
  //   const captureImage = async () => {
  //     const result = await ImagePicker.launchCameraAsync({
  //       quality: 1,
  //     });
  //     if (!result.canceled) {
  //       setImage(result.assets[0]);
  //     } else {
  //       console.log('cancelled');
  //     }
  //   };

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
    // await UpdateUserMutaion({
    //   variables: {
    //     input: {
    //       id: searchParams.userId as string,
    //       image: image,
    //     },
    //   },

    // //   onCompleted: ({ updateUser }) => {
    // //     console.log(JSON.stringify(updateUser, null, 2));
    // //     setUser(updateUser);
    // //     console.log(data);
    //     //   },
    // });
    //   console.log(data)
  };

  return (
    <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text onPress={() => router.push('../')} style={{ left: -100, bottom: 20}}>
           <BackIcon />
          </Text>
          <Text style={{ fontSize: 35, color: '#000' }}>Profile</Text>
        </View>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={{ width: 150, height: 150, borderRadius: 100, alignItems: 'center' }}
            source={{
              uri: `${image}`,
            }}
          />
        </TouchableOpacity>
        {/* <Button title="Capture image" onPress={captureImage} /> */}
        {/* {image && (
        <View>
          <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
          <Text onPress={uploadImage}>Upload</Text>
        </View>
      )} */}

        {isEditing ? (
          <TextInput style={styles.input} onChangeText={handleChangeText} value={name} />
        ) : (
          <Text style={styles.name}>{user?.username}</Text>
        )}
        {isEditing ? (
          <Text onPress={handleSave}>Save</Text>
        ) : (
          <Text onPress={handleEdit}>edit</Text>
        )}
        <TextInput
          placeholder={bio}
          onChangeText={handleBioChange}
          value={bio}
          multiline
          numberOfLines={4}
          onFocus={handleInputFocus}
        />
        {isBioe && (
          <Text style={{ borderRadius: 10, borderColor: '#000' }} onPress={handleDonePress}>
            Done
          </Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 50,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  gradientContainer: {
    flex: 1,
    // justifyContent: 'center',
    // borderRadius: 20,
  },
});
