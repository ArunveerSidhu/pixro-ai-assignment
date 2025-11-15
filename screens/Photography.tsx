import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Header, SearchInput, PromptInput, ImageSection } from '../components'

const Photography = () => {
  return (
    <View className='flex-1 bg-[#1A1D1E]'>
      <SafeAreaView edges={['top']}>
        <Header />
      </SafeAreaView>
      <ScrollView className='flex-1 bg-[#141718]'>
        <View className='mt-4 px-4 gap-4'>
          <SearchInput />
          <PromptInput />
        </View>
        <View className='pb-10 mt-4'>
          <ImageSection title="Or try suggested templates" />
          <ImageSection title="monochrome" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Photography;
