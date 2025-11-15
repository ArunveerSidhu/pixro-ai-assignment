import { View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const PromptInput = () => {
  const [text, setText] = useState('');

  return (
    <View className="border border-[#454545] rounded-xl pb-4 px-4 relative">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Describe the scene around your product..."
        placeholderTextColor="#aaa"
        className="text-white text-base min-h-24 mb-4"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
      
      
      <TouchableOpacity className="absolute bottom-4 right-6">
        <Ionicons name="sparkles" size={20} color="#10b981" />
      </TouchableOpacity>
    </View>
  );
};

export default PromptInput;

