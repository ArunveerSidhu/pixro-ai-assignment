import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Header, SearchInput, PromptInput, ImageSection } from '../components'
import { templateSuggestionsData, monochromeData, ImageItem } from '../mockData'

interface SectionData {
  id: string;
  title: string;
  data: ImageItem[];
}

const Photography = () => {
  const sections: SectionData[] = [
    { id: '1', title: 'Or try suggested templates', data: templateSuggestionsData },
    { id: '2', title: 'monochrome', data: monochromeData },
  ];

  const renderHeader = () => (
    <View className='py-4 px-4 gap-4'>
      <SearchInput />
      <PromptInput />
    </View>
  );

  const renderSection = ({ item }: { item: SectionData }) => (
    <ImageSection title={item.title} data={item.data} />
  );

  const renderFooter = () => <View className='pb-10' />;

  return (
    <View className='flex-1 bg-[#1A1D1E]'>
      <SafeAreaView edges={['top']} className='flex-1'>
        <Header />
        <FlatList
          className='flex-1 bg-[#141718]'
          data={sections}
          renderItem={renderSection}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ paddingTop: 4 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Photography;
