import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View className="flex-row items-center bg-[#454545] rounded-xl py-1 px-4">
      
      <Ionicons name="search" size={20} color="#6B7280" />
      
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search for keyword 'flowers'."
        placeholderTextColor="#6B7280"
        className="flex-1 ml-2 text-white text-base"
      />
    </View>
  );
};

export default SearchInput;

