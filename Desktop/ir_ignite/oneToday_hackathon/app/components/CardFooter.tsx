/* eslint-disable react-native/no-inline-styles */

import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { DollarSquare } from 'iconsax-react-native';
import { TouchableOpacity } from "react-native-gesture-handler"

export interface CardFooterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onPress: ()=> void;
}

/**
 * Describe your component here
 */
export const CardFooter = observer(function CardFooter({onPress}: CardFooterProps) {
  
  const $styles = [$container]

  return (
    <View style={$styles}>
      <Text style={$text}>Donate for kids to their well being</Text>
      <View style={$bottom}>
        <View style={$innerBottom}>
          <DollarSquare size="25" color="#307c31" variant="Bold" style={{marginRight: 5}}/>
          <Text style={{}}>Isha Foundation</Text>
        </View>
        
        <TouchableOpacity onPress={onPress} style={{backgroundColor: colors.palette.primary, borderRadius: 10}}>
          <Text style={$touchableText} size="lg">Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  backgroundColor: colors.palette.light,
  borderRadius: 6,
  padding: 10
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: "black",
}

const $bottom: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'  
}

const $innerBottom: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center' 
}

const $touchableText: TextStyle ={
  fontFamily: typography.secondary?.medium,
  color: 'white',
  margin: 5,
}