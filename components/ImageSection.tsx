import { View, Text } from 'react-native';
import React from 'react';
import ImageGrid from './ImageGrid';

const ImageSection = ({ title }: { title: string }) => {
  return (
    <View>
      {/* Section Title */}
      <Text className="text-gray-400 text-sm mb-4 px-4">
        {title}
      </Text>

      {/* Image Grid */}
      <ImageGrid />
    </View>
  );
};

export default ImageSection;

