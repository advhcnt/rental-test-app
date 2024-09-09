import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import RNPickerSelect from 'react-native-picker-select';

const SearchBar = () => {
    const [propertyType, setPropertyType] = useState('');
    const [propertyStatus, setPropertyStatus] = useState('');
    const [chambers, setChambers] = useState('');

    return (
        <View style={tw`p-4 bg-white`}>
            <TextInput
                style={tw`border border-gray-300 rounded-lg px-4 py-2 mb-4`}
                placeholder="Location"
            />

            <View style={tw`flex-row justify-between mb-4`}>
                {/* Dropdown for "Type de biens" */}
                <View style={tw`flex-1 mr-2`}>
                    <RNPickerSelect
                        onValueChange={(value) => setPropertyType(value)}
                        items={[
                            { label: 'Appartement', value: 'appartement' },
                            { label: 'Maison', value: 'maison' },
                            { label: 'Villa', value: 'villa' },
                        ]}
                        style={{
                            inputIOS: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                            inputAndroid: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                        }}
                        placeholder={{
                            label: 'Type de biens',
                            value: null,
                            color: '#9EA0A4',
                        }}
                    />
                </View>

                {/* Dropdown for "Status du biens" */}
                <View style={tw`flex-1 mx-2`}>
                    <RNPickerSelect
                        onValueChange={(value) => setPropertyStatus(value)}
                        items={[
                            { label: 'À louer', value: 'a_louer' },
                            { label: 'À vendre', value: 'a_vendre' },
                        ]}
                        style={{
                            inputIOS: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                            inputAndroid: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                        }}
                        placeholder={{
                            label: 'Status du biens',
                            value: null,
                            color: '#9EA0A4',
                        }}
                    />
                </View>

                {/* Dropdown for "Chambres" */}
                <View style={tw`flex-1 ml-2`}>
                    <RNPickerSelect
                        onValueChange={(value) => setChambers(value)}
                        items={[
                            { label: '1 Chambre', value: '1' },
                            { label: '2 Chambres', value: '2' },
                            { label: '3 Chambres', value: '3' },
                        ]}
                        style={{
                            inputIOS: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                            inputAndroid: tw`bg-gray-200 p-3 rounded-lg text-gray-600`,
                        }}
                        placeholder={{
                            label: 'Chambres',
                            value: null,
                            color: '#9EA0A4',
                        }}
                    />
                </View>
            </View>

            <TouchableOpacity>
                <Text style={tw`text-[#b68f71] text-sm`}>Plus d'options de recherche</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;
