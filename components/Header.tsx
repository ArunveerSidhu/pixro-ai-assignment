import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface MenuItem {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap | keyof typeof MaterialIcons.glyphMap;
  iconLibrary: 'Ionicons' | 'MaterialIcons';
  color: string;
}

const Header = () => {
  const [activeId, setActiveId] = useState('3'); // Photography is active by default
  const menuItems: MenuItem[] = [
    {
      id: '1',
      label: 'Home',
      icon: 'home-outline',
      iconLibrary: 'Ionicons',
      color: '#10b981',
    },
    {
      id: '2',
      label: 'Videos',
      icon: 'videocam-outline',
      iconLibrary: 'Ionicons',
      color: '#10b981',
    },
    {
      id: '3',
      label: 'Photography',
      icon: 'camera-outline',
      iconLibrary: 'Ionicons',
      color: '#ec4899',
    },
    {
      id: '4',
      label: 'In action',
      icon: 'play-circle-outline',
      iconLibrary: 'Ionicons',
      color: '#eab308',
    },
    {
      id: '5',
      label: 'Commercial',
      icon: 'star-outline',
      iconLibrary: 'Ionicons',
      color: '#f97316',
    },
    {
      id: '6',
      label: 'AR',
      icon: 'cube-outline',
      iconLibrary: 'Ionicons',
      color: '#f97316',
    },
  ];

  const renderMenuItem = ({ item }: { item: MenuItem }) => {
    const isActive = activeId === item.id;
    
    return (
      <View className="flex-row items-center">
        <TouchableOpacity 
          className="items-center mr-6"
          onPress={() => setActiveId(item.id)}
        >
          <View className={`mb-1 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
            {item.iconLibrary === 'Ionicons' ? (
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={item.color}
              />
            ) : (
              <MaterialIcons
                name={item.icon as keyof typeof MaterialIcons.glyphMap}
                size={24}
                color={item.color}
              />
            )}
          </View>
          <Text
            className={`text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
        {/* Separator line after Home */}
        {item.id === '1' && (
          <View className="h-12 w-[1px] bg-gray-700 mr-6" />
        )}
      </View>
    );
  };

  return (
    <View>
      {/* Top Header Bar */}
      <View className="flex-row items-center justify-between px-4 py-4 mb-5">
        {/* Back Button */}
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-white text-2xl font-semibold">Photography</Text>

        {/* Profile Picture */}
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://picsum.photos/40/40' }}
            className="w-9 h-9 rounded-full"
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Menu Items */}
      <View className="pb-4">
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </View>
  );
};

export default Header;