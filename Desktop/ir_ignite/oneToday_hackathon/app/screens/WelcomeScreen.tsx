/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { View, ViewStyle, ImageStyle} from "react-native"
import {
  Button,
  Screen,
  Text, TextField, Icon, AutoImage
} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useNavigation } from "@react-navigation/native"


const donateImage = require("../../assets/images/donate.png")


interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {
  const navigation = useNavigation()
  const [input, setInput] = useState("")

  function verifyOtp() {
    navigation.navigate("VerifyOtp", { screen: "VerifyOtp", params: {} })
  } 
  return (
   <Screen 
      preset="scroll" 
      safeAreaEdges={["top", "bottom"]} 
      keyboardShouldPersistTaps="handled"
      style={{padding: 10}}
      contentContainerStyle={{ justifyContent: 'center',  }}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}
    >
      
     <View style={$container}>
      <View style={$topContainer}>
      <Text
         testID="welcome-heading"
         style={{marginTop: spacing.lg, marginBottom: spacing.sm,}}
         tx="welcomeScreen.welcomeText"
         preset="heading"
       />
        <AutoImage style={$donateImage} source={donateImage} resizeMode="contain" />
      </View>

      <View style={$bottomContainer}>
       <Text
         testID="welcome-heading"
         style={{marginTop: spacing.lg, marginBottom: spacing.sm}}
         tx="welcomeScreen.readyForLaunch"
         preset="heading"
       />
       <Text 
          style={{ marginBottom: spacing.sm}}
          tx="welcomeScreen.exciting" 
          preset="subheading" />

       <TextField
        value={input}
        onChangeText={setInput}
        keyboardType="number-pad"
        labelTx="signup.name"
        placeholderTx="signup.nameplaceholder"
        labelTxOptions={{ name: "John" }}
        containerStyle={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, }}
        inputWrapperStyle={{ backgroundColor: colors.palette.white, borderWidth: 0 }}
       />

       <Button 
         tx="button.clickIt"
         preset="default"
         style={$continueButton}
         pressedStyle={{ backgroundColor: colors.palette.primary }}
         textStyle={[{ fontSize: 20 }, { color: "#fff" }]}
         onPress={verifyOtp}
         RightAccessory={(props) => (
          <Icon 
            containerStyle={props.style} 
            size={props.pressableState.pressed ? 24 : 24} 
            icon="caretRight" 
          />
        )}
       />
       
     </View>

      
    </View>
   </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
  marginTop: 50
  
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.sm,
  justifyContent: "space-around",
  paddingTop: spacing.xxxl
}

const $continueButton = {
  backgroundColor: colors.palette.secondary,
  borderWidth: 0,
  marginTop: spacing.sm
}

const $donateImage: ImageStyle = {
  height: 250,
  width: "100%",
  marginTop: 50,
  marginBottom: spacing.xxl,
}



