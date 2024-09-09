import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

interface PropertyCardProps {
    title: string;
    description: string;
    price: string;
    image: string;
    latitude: number;
    longitude: number;
}


const PropertyCard: React.FC<PropertyCardProps> = ({ title, description, price, image, latitude, longitude }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={tw`bg-white p-4 mb-4 rounded-lg shadow-lg`}>
            <TouchableOpacity onPress={toggleModal}>
                <Image
                    source={{ uri: image }}
                    style={tw`h-40 w-full rounded-lg`}
                    resizeMode="cover"
                />
                <View style={tw`flex-row justify-between px-2 py-1 absolute top-2 w-full`}>
                    <View style={tw`bg-gray-800 text-white px-2 py-1 rounded-full`}>
                        <Text style={tw`text-white`}>À louer</Text>
                    </View>
                    <View style={tw`bg-gray-800 text-white px-2 py-1 rounded-full`}>
                        <Text style={tw`text-white`}>il y a environ 19 heures</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={toggleFavorite}
                    style={tw`absolute bottom-2 right-2 p-2 rounded-full bg-gray-900 bg-opacity-50`}>
                    <FontAwesome
                        name={isFavorited ? 'heart' : 'heart-o'}
                        size={20}
                        color={isFavorited ? 'red' : 'white'}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={tw`text-lg font-semibold mt-2`}>{title}</Text>
            <Text style={tw`text-sm text-gray-600`}>{description}</Text>
            <Text style={tw`text-lg text-[#b68f71] mt-2`}>{price}</Text>

            {/* Modal for property details and map */}
            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalOverlay}>
                    <ScrollView style={styles.modalContainer}>
                        <Image
                            source={{ uri: image }}
                            style={tw`h-40 w-full rounded-t-lg`}
                            resizeMode="cover"
                        />
                        <View style={tw`p-4`}>
                            <Text style={tw`text-xl font-bold`}>{title}</Text>
                            <Text style={tw`text-md`}>{description}</Text>
                            <Text style={tw`text-lg text-[#b68f71]`}>{price}</Text>
                        </View>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: latitude, longitude: longitude }}
                                title={title}
                            />
                        </MapView>
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={tw`absolute top-4 right-4 bg-white p-2 rounded-full`}>
                            <FontAwesome name="times" size={24} color="black" />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: 200,
    },
});

export default PropertyCard;
