/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Button, TextField } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { colors, spacing } from "../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
// import { useStores } from "app/models"

interface VerifyOtpScreenProps extends AppStackScreenProps<"VerifyOtp"> {}

export const VerifyOtpScreen: FC<VerifyOtpScreenProps> = observer(function VerifyOtpScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [otp, setOtp] = useState("")

  // Pull in navigation via hook
  const navigation = useNavigation()
  const gotoHome = () => {
    navigation.navigate("Home", { screen: "HomeScreen", params: {} })
  }

  return (
    <Screen 
      style={$root} 
      preset="scroll"
      safeAreaEdges={["top", "bottom"]} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ justifyContent: 'center',  }}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}
    >
      <Text 
        preset="subheading"
        style={{marginTop: spacing.lg, marginBottom: spacing.sm}} 
        tx="otpScreen.otpDescription" 
      />

      <TextField
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        labelTx="otpScreen.enter"
        placeholderTx="otpScreen.placeholder"
        labelTxOptions={{ name: "John" }}
        containerStyle={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, }}
        inputWrapperStyle={{ backgroundColor: colors.palette.white, borderWidth: 0 }}
       />
       <TouchableOpacity>
        <Text 
          tx="otpScreen.resendOtp" 
          style={{color: 'blue', textDecorationLine: "underline", alignSelf: 'flex-end'}} 
          />
       </TouchableOpacity>

       <Button 
         tx="otpScreen.verifyOTP"
         preset="default"
         style={$continueButton}
         pressedStyle={{ backgroundColor: colors.palette.primary }}
         textStyle={[{ fontSize: 20 }, { color: "#fff" }]}
         onPress={gotoHome}
       />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: 20
}

const $continueButton = {
  backgroundColor: colors.palette.secondary,
  borderWidth: 0,
  marginTop: spacing.sm
}