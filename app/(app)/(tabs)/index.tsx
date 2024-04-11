import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

// import { useAnimeGenresQuery } from '@/graphql/generated';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';

// import { useGetPostListQuery } from '../../../graphql/generated';
// import { FullWindowOverlay } from 'react-native-screens';

export default function PostPage(): React.JSX.Element {
  // const { data, error, loading } = useGetPostListQuery();

  // if (loading)
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>Loading...</Text>
  //     </View>
  //   );

  // if (error) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>
  //         Error: {error.message}
  //       </Text>
  //     </View>
  //   );
  // }
  // const handleItemClick = (id: string) => {
  //   getPost({
  //     variables: {
  //       id,
  //     },
  //   });
  // };
  return (
    <View style={{ flex: 1, backgroundColor: '#ECB4d0', paddingTop: 50 }}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <ScrollView>
          <View>
            <Text style={styles.email}>Cute Paws</Text>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent:"center",
                alignItems: 'center',
                backgroundColor: '#FFC9E6',
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
                  borderColor: '#000',
                  width: 240,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 20,
                }}
                onPress={() => router.push('../create-post')}>
                CreatePost
              </Text>
            </View>
            {/* {data?.getPostList.map((post) => (
            <>
            <Text key={post.id} style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>
              {post.title}
            </Text>
            <Text key={post.id} style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>
              {post.phoneNum}
            </Text>
            <Image source={{ uri: post.postImage }} />
             </> 
            ))} */}
            <TouchableOpacity onPress={() => router.push('/(app)/post')}>
              <View
                style={{
                  flexDirection: 'column',
                  // justifyContent:"center",
                  alignItems: 'center',
                  // marginHorizontal: 15,
                  marginTop: 10,
                  // backgroundColor: '#FFC9E1',
                  width: '100%',
                }}>
                {/* <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginHorizontal: 15,
                    marginTop: 10,
                    // backgroundColor: '#FFC9E6',
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
                      // borderColor: '#000',
                      width: 240,
                      // borderWidth: 1,
                      paddingHorizontal: 10,
                      // borderRadius: 20,
                    }}>
                    ner
                  </Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    margin: 10,
                    // backgroundColor: '#FFC9E6',
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      // borderWidth: '100%',
                      // borderTopColor: '#FFF',
                      // borderWidth: 1,
                    }}>
                    Muur nohoigoo 1 honog haruulna
                  </Text>
                </View>
                {/* <Image
                  width={200}
                  source={{
                    uri: 'https://i.pinimg.com/originals/04/5b/f4/045bf4ec3e19c54adc179eaff757e6d2.jpg',
                  }}
                /> */}
                <Image
                  style={{ width: '100%', height: 500, margin: 10 }}
                  source={{
                    uri: 'https://i.pinimg.com/originals/04/5b/f4/045bf4ec3e19c54adc179eaff757e6d2.jpg',
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 10,
                  // backgroundColor: '#FFC9E6',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    // backgroundColor: '#FFC9E6',
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
                  </Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    margin: 10,
                    // backgroundColor: '#FFC9E6',
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                    }}>
                    Muur nohoigoo 7 honog haruulna
                  </Text>
                </View>

                <Image
                  style={{ width: '100%', height: 500, margin: 10 }}
                  source={{
                    uri: 'https://petkeen.com/wp-content/uploads/2020/06/Russian-White-Cat.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradientContainer: {
    flex: 1,
    // justifyContent: 'center',
    // borderRadius: 20,
  },
});
