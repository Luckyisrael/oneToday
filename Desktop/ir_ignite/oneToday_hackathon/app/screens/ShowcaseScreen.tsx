/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */

import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle, Image, TouchableOpacity, TextInput, Animated } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BusinessCard, Header, Screen, Text, } from "app/components"
import { colors } from "app/theme"
import { FlashList } from "@shopify/flash-list";
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { Marker } from 'react-native-maps';
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ShowcaseScreenProps extends AppStackScreenProps<"Showcase"> {
  id: string;
  image: any;
  location: string;
  description: string;
}



const shopData: ShopData[] = [
  {
    id: '1',
    image: 'shop1',
    location: 'Pawn Show',
    description: 'Description for Shop 1',
  },
  {
    id: '2',
    image: 'shop2',
    location: 'GOld Show',
    description: 'Description for Shop 2',
  },
  {
    id: '3',
    image: 'shop3',
    location: 'Community Supermarket',
    description: 'Description for Shop 2',
  },
  {
    id: '4',
    image: 'shop4',
    location: 'Notjust Dev Office',
    description: 'Description for Shop 2',
  },
  {
    id: '5',
    image: 'shop5',
    location: 'Shopify Office',
    description: 'Description for Shop 2',
  },
  {
    id: '6',
    image: 'shop6',
    location: 'Today Store',
    description: 'Description for Shop 2',
  },
  {
    id: '7',
    image: 'shop7',
    location: 'Micheal Shop',
    description: 'Description for Shop 2',
  },
  {
    id: '8',
    image: 'shop8',
    location: 'Phone Shop',
    description: 'Description for Shop 2',
  },
  // Add more shops as needed
];

const ShopListItem: React.FC<{ item: ShopData; onPress: (item: ShopData) => void }> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={$shopContainer} onPress={() => onPress(item)}>
      <Image source={{ uri: item.image }} style={$shopImage} />
      <View style={$shopContentContainer}>
        <Text style={$shopLocation}>{item.location}</Text>
        <Text style={$shopDescription}>{item.description}</Text>
        <TouchableOpacity style={$shopButton} onPress={() => onPress(item)}>
          <Text style={$shopButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const ShowcaseScreen: FC<ShowcaseScreenProps> = observer(function ShowcaseScreen() {
  
  const [selectedShop, setSelectedShop] = useState<ShopData | null>(null);
  const bottomSheetRef = React.createRef<BottomSheet>();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<ShopData[]>(shopData);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    // Filter data based on search text
    const filtered = shopData.filter((shop) => shop.location.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(filtered);
  }, [searchText]);

  const renderItem = ({ item }: { item: ShopData }) => {
    return <ShopListItem item={item} onPress={handleShopPress} />;
  };

  const handleShopPress = (shop: ShopData) => {
    setSelectedShop(shop);
    bottomSheetRef.current?.expand();
  };

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
  
  return (
    <Screen style={$root} 
      preset="scroll"
      safeAreaEdges={["top", "bottom"]} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ justifyContent: 'center',  }}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}>
        
        <Header 
          containerStyle={{ backgroundColor: colors.palette.secondary, alignSelf: 'flex-start' }} 
          title="Business Showcase "
          // titleContainerStyle={{ backgroundColor: colors.palette.secondary }}
          style={{ height: 80 }}
          // backgroundColor="blue"
          safeAreaEdges={[]} 
        />
        <Animated.View style={[{$header}, { transform: [{ translateY: headerTranslateY }] }]}>
        <TextInput
          style={$searchInput}
          placeholder="Search for business or location"
          value={searchText}
          onChangeText={setSearchText}
        />
      </Animated.View>
    <View style={{width: "100%", padding: 20}}>
    
    <FlashList
        data={shopData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={20}
      />

      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['25%', '50%', '90%']} style={$bottomSheet}>
        {selectedShop && (
          <View style={$bottomSheetContent}>
            <Text style={$bottomSheetTitle}>{selectedShop.location}</Text>
            <Text>{selectedShop.description}</Text>

            {/* Google Map */}
            <MapView style={$map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
              <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title={selectedShop.location} />
            </MapView>
          </View>
        )}
      </BottomSheet>

    </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $container: ViewStyle = {
  flex: 1,
}
const $shopContainer: ViewStyle = {
  flexDirection: 'row',
  padding: 10,
  borderWidth: 0.5,
  borderRadius: 10,
  borderColor: colors.palette.secondary,
  marginVertical: 10,
  backgroundColor: colors.palette.light
}
const $shopImage: ViewStyle ={
  width: 80,
  height: 80,
  marginRight: 10,
  borderRadius: 5,
}
const $shopContentContainer: ViewStyle ={


}
const $shopLocation: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
}
const $shopDescription: TextStyle ={
  fontSize: 16,
  marginBottom: 12,
}
const $shopButton = {
  backgroundColor: colors.palette.primary,
  padding: 10,
  borderRadius: 5,
  alignSelf: 'flex-start',
}
const $shopButtonText: TextStyle = {
  color: '#fff',
  fontWeight: 'bold',
}
const $bottomSheet = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
}
const $bottomSheetContent = {
  padding: 16,
}
const $bottomSheetTitle= {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
}
const $map= {
  height: 200,
  marginTop: 10,

}

const $searchInput = {
  height: 60,
  borderColor: 'gray',
  borderWidth: 1,
  margin: 10,
  padding: 5,
  borderRadius: 5,
}
const $header = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: '#fff',
  elevation: 3,
}