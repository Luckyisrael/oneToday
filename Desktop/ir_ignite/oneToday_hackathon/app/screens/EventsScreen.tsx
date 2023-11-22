/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */

import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from "app/theme"

interface EventsScreenProps extends AppStackScreenProps<"Events"> {
  id: string;
  image: any;
  title: string;
  description: string;
}
const event1 = require("../../assets/images/event1.png")
const event2 = require("../../assets/images/event2.png")
const event3 = require("../../assets/images/event3.png")

const eventData: EventData[] = [
  {
    id: '1',
    image: event1,
    date: '25/12/2023',
    description: 'Community Clean Up',
  },
  {
    id: '2',
    image: event2,
    date: '10/12/2023',
    description: 'Fund raiser for Dustin College',
  },
  {
    id: '3',
    image: event3,
    date: '23/11/2023',
    description: 'Notjust Hack Demo day',
  },
];

const EventCarouselItem: React.FC<{ item: EventData; onShare: () => void }> = ({ item, onShare }) => {
  const { image, title, description } = item;

  return (
    <View style={$container}>
      <Image source={image} style={$image} />
      <View style={$contentContainer}>
        <Text style={$title}>{title}</Text>
        <Text style={$description}>{description}</Text>
        <TouchableOpacity style={$shareButton} onPress={onShare}>
          <Text style={$shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const EventsScreen: FC<EventsScreenProps> = observer(function EventsScreen() {

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: EventData }) => {
    return <EventCarouselItem item={item} onShare={() => handleShare(item)} />;
  };

  const handleShare = (event: EventData) => {
    // Implement your share logic here
    console.log(`Sharing event: ${event.title}`);
  };

  return (
    <Screen style={$root}  preset="scroll"
      safeAreaEdges={["top", "bottom"]} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ justifyContent: 'center',  }}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}>
      
      <Text text="General Purpose Events" style={{marginBottom: 10, fontSize: 20, fontWeight: 'bold'}} />

      <View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
      <Carousel
        data={eventData}
        layout={'tinder'} layoutCardOffset={`9`}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index: any) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={eventData.length}
        activeDotIndex={activeIndex}
        containerStyle={{ paddingTop: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: colors.palette.primary,
        }}
        inactiveDotStyle={{
          backgroundColor: colors.palette.secondary,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
      </View>

      <Text text="Fund Raiser Events"  style={{marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}  />

      <View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
      <Carousel
        data={eventData}
        layout={'stack'} layoutCardOffset={'9'}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index: any) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={eventData.length}
        activeDotIndex={activeIndex}
        containerStyle={{ paddingTop: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: colors.palette.primary,
        }}
        inactiveDotStyle={{
          backgroundColor: colors.palette.secondary,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
      </View>
     
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding:20,
  // backgroundColor: colors.palette.light
}

const $container: ViewStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: '#fff',
  elevation: 3,
  borderWidth:1,
  borderColor: colors.palette.primary
}

const $image: ImageStyle = {
  width: '100%',
  height: 200,
}

const $contentContainer: ViewStyle = {
  padding: 16,
  backgroundColor: colors.palette.light,
}

const $title: TextStyle = {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
}

const $description: TextStyle = {
  fontSize: 16,
  marginBottom: 12,
}
const $shareButton = {
  backgroundColor: colors.palette.primary,
  padding: 10,
  borderRadius: 5,
  alignSelf: 'flex-start',
}
const $shareButtonText: TextStyle = {
  color: '#fff',
  fontWeight: 'bold',
}