import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import tw from 'twrnc';
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
    const properties = [
        {
            id: 1,
            title: 'Appart 12',
            description: '1 Chambres • 1 Salles de bain • 100 m² • Appartement • À louer',
            price: '100000 F CFA',
            image: 'https://img.freepik.com/photos-gratuite/paysage-analogique-ville-batiments_23-2149661456.jpg?t=st=1725895573~exp=1725899173~hmac=347ba761b9afe99c44a1db22f3df226e8d730ce0516de1ba4423ad29a4dc326b&w=2000',
        },
        {
            id: 2,
            title: 'Appart 13',
            description: '2 Chambres • 2 Salles de bain • 120 m² • Appartement • À louer',
            price: '120000 F CFA',
            image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        // Add more property data
    ];

    return (
        <ScrollView style={tw`p-4`}>
            <Text style={tw`text-xl font-bold mb-4`}>17 Propriétés</Text>
          
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        title={property.title}
                        description={property.description}
                        price={property.price}
                        image={property.image}
                        latitude={37.78825}
                        longitude={-122.4324}
                    />
                ))}
          

        </ScrollView>
    );
};

export default PropertyList;
