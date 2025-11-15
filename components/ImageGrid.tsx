import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ImageItem {
  id: string;
  uri: string;
}

const ImageGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Sample images - using picsum for placeholder images
  const images: ImageItem[] = [
    { id: '1', uri: 'https://picsum.photos/400/300?random=1' },
    { id: '2', uri: 'https://picsum.photos/400/300?random=2' },
    { id: '3', uri: 'https://picsum.photos/400/300?random=3' },
    { id: '4', uri: 'https://picsum.photos/400/300?random=4' },
    { id: '5', uri: 'https://picsum.photos/400/300?random=5' },
    { id: '6', uri: 'https://picsum.photos/400/300?random=6' },
  ];

  const renderItem = ({ item }: { item: ImageItem }) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity
        className="w-[31%] aspect-square mb-3"
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.8}
      >
        <View className="relative w-full h-full rounded-xl overflow-hidden">
          {/* Image */}
          <Image
            source={{ uri: item.uri }}
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

