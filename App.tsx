import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import tw from 'twrnc';

export default function App() {
    return (
        <SafeAreaView style={tw`bg-gray-100 flex-1`}>
            <ScrollView>
                <SearchBar />
                <PropertyList />
            </ScrollView>
        </SafeAreaView>
    );
}
