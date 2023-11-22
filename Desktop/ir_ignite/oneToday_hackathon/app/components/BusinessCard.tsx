/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */

import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, TouchableOpacity, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, } from "app/components"

export interface BusinessCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  image: any;
  title: string;
  Description: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BusinessCard = observer(function BusinessCard({ Description, onPress, image, title}: BusinessCardProps) {
  const $styles = [$container]

  return (
    <View style={$styles}>
       <View style={$imageContainer}>
       <Image source={image} style={$image} resizeMode="contain"/>
      </View>

      <Text style={$text}>{title}</Text>
      <Text style={{color: 'black',  paddingVertical: 10, paddingHorizontal: 10}}>{Description}</Text>
      <View style={$buttonContainer}>
        
          <TouchableOpacity
            style={{
              backgroundColor: colors.palette.primary, 
              justifyContent: 'center', 
              flexDirection: 'row', 
              borderRadius: 10,
              margin: 10
            }} 
              
              onPress={onPress}>
            <Text style={{padding: 10}}>Find the Business</Text>
          </TouchableOpacity>
        
      </View>

      
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  margin: 10, 
  backgroundColor: colors.palette.light
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
  margin: 10
}

const $imageContainer: ViewStyle = {
  flexDirection: 'row',
    marginBottom: 10,
    width: "100%",
    justifyContent: 'center'
}

const $image: ImageStyle = {
  width: 200,
  height: 150,
  marginRight: 10,
  borderRadius: 5,
  alignItems: 'center'
}

const $buttonContainer: ViewStyle = {
  
}


