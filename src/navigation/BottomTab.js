// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng FontAwesome làm ví dụ

import CalendarScreen from '../screens/CalendarScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen'; 
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'list';
              break;
            case 'FavoriteScreen':
              iconName = 'heart';
              break;
            case 'CalendarScreen':
              iconName = 'calendar';
              break;
            case 'ProfileScreen':
              iconName = 'user';
              break;
            default:
              iconName = 'question'; // Icon mặc định nếu không khớp với tên nào
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false, // Đặt headerShown: false cho toàn bộ TabNavigator
        tabBarStyle: {
          backgroundColor: '#49A65A', // Màu nền của BottomTab
        },
        tabBarActiveTintColor: '#3b5998', // Màu của icon khi tab được chọn
        tabBarInactiveTintColor: '#8e8e8e', // Màu của icon khi tab không được chọn
      })}
          >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} /> {/* Sửa lỗi chính tả */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
