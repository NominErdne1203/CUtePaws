import { Tabs } from 'expo-router';
import * as React from 'react';

import HomeIcon from '../../../assets/images/homeIcon';

import UserIcon from '@/assets/images/userIcon';

const TabLayout: React.FC = () => {
  return (
    // <Tabs.Navigator
    // tabBarOptions={{
    //   tabBarStyle: {
    //     backgroundColor: 'transparent',
    //   },
    // }}
    // ></Tabs.Navigator>
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeIcon />,

          tabBarStyle: {
            backgroundColor: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <UserIcon />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
