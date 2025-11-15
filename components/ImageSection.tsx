import { View, Text } from 'react-native';
import React from 'react';
import ImageGrid from './ImageGrid';
import { ImageItem } from '../mockData';

interface ImageSectionProps {
  title: string;
  data: ImageItem[];
}

const ImageSection = ({ title, data }: ImageSectionProps) => {
  return (
    <View>
      {/* Section Title */}
      <Text className="text-gray-400 text-sm mb-4 px-4">
        {title}
      </Text>

      {/* Image Grid */}
      <ImageGrid initialData={data} />
    </View>
  );
};

export default ImageSection;

