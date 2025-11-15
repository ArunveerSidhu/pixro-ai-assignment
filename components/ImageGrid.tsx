import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ImageItem } from '../mockData';

interface ImageGridProps {
  initialData: ImageItem[];
}

const ImageGrid = ({ initialData }: ImageGridProps) => {
  // Mock data following the required structure
  const [images, setImages] = useState<ImageItem[]>(initialData);

  const handleSelect = (id: string) => {
    setImages(prevImages =>
      prevImages.map(img =>
        img.id === id
          ? { ...img, isSelected: !img.isSelected }
          : { ...img, isSelected: false }
      )
    );
  };

  const renderItem = ({ item }: { item: ImageItem }) => {
    const isSelected = item.isSelected;

    return (
      <TouchableOpacity
        className="w-[31%] aspect-square mb-3"
        onPress={() => handleSelect(item.id)}
        activeOpacity={0.8}
      >
        <View className="relative w-full h-full rounded-xl overflow-hidden">
          {/* Image */}
          <Image
            source={{ uri: item.image }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Selected Overlay */}
          {isSelected && (
            <>
              {/* Dark overlay */}
              <View className="absolute inset-0 bg-black/40" />
              
              {/* Checkmark icon */}
              <View className="absolute top-2 right-2 bg-[#10b981] rounded-full w-6 h-6 items-center justify-center">
                <Ionicons name="checkmark" size={16} color="white" />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="px-4">
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ImageGrid;

