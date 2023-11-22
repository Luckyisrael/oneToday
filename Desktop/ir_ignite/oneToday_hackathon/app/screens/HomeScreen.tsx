/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef, useCallback, useMemo, useState  } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ImageStyle, TextStyle, TouchableOpacity, } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Button, Card, CardFooter, Header, Icon, Screen, Text, TextInput } from "app/components"
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';

import { colors} from "app/theme"
import {  BottomSheetModal,
  BottomSheetModalProvider,} from '@gorhom/bottom-sheet';




interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

const cardImage = require("../../assets/images/donate1.jpg")

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const paystackWebViewRef = useRef<paystackProps.PayStackRef>(); 
  const [amount, setAmount] = useState("")

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const openPayment = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Screen 
      style={$root} 
      preset="scroll"
      safeAreaEdges={["top", ]} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ justifyContent: 'center',  }}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}
      >
        <Header 
          
          // containerStyle={{ backgroundColor: "purple" }} 
          // titleContainerStyle={{ backgroundColor: "purple" }}
          style={{ height: 80 }}
          // backgroundColor="blue"
          safeAreaEdges={[]} 
          leftIcon="profile"
          
          rightIcon="bell"
          
        />

      <View style={$cardContainer}>
        <Card
        style={$cardStyle}
           preset="reversed"
           verticalAlignment="space-between"
           ContentComponent={
            <View style={{paddingBottom: 10}}>
              <AutoImage
                style={$donateImage} 
                source={cardImage}
                resizeMode="contain"
              />
          
            </View>
           
          }contentStyle={{ backgroundColor: colors.error, color: colors.palette.light }}
           FooterComponent={<CardFooter onPress={openPayment} />}
        />
        <Card
        style={$cardStyle}
           preset="reversed"
           verticalAlignment="space-between"
           ContentComponent={
            <View style={{paddingBottom: 10}}>
              <AutoImage
                style={$donateImage} 
                source={cardImage}
                resizeMode="contain"
              />
          
            </View>
           
          }contentStyle={{ backgroundColor: colors.error, color: colors.palette.light }}
           FooterComponent={<CardFooter onPress={openPayment} />}
        />
         <Card
        style={$cardStyle}
           preset="reversed"
           verticalAlignment="space-between"
           ContentComponent={
            <View style={{paddingBottom: 10}}>
              <AutoImage
                style={$donateImage} 
                source={cardImage}
                resizeMode="contain"
              />
          
            </View>
           
          }contentStyle={{ backgroundColor: colors.error, color: colors.palette.light }}
           FooterComponent={<CardFooter onPress={openPayment} />}
        />
        
      </View>

      <BottomSheetModalProvider>
      <View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          
        >
          <View style={$bottomSheetContainer}>
            <Text style={{ fontSize:24, color: colors.palette.primary, fontWeight: 'bold'}}>Donate $1</Text>
            <Text style={{ fontSize:18, marginVertical: 10, marginBottom: 10}}>By Donating to Isha Foundation, you have fed millions of homeless kids in africa, visit out testimony page to know where your money is going to. Thank you, Lucky</Text>
            <View style={{flex: 1}}>
                  <Paystack
                    paystackKey="pk_test_636f10a472dc8662b9cf0c0480bfe7c197d7b192"
                    billingEmail="luckyisrael4real@gmail.com"
                    billingMobile="08012345678"
                    billingName="Lucky"
                    currency="NGN"
                    amount={'1.00'}
                    onCancel={(e) => {
                      console.log(e)
                    }}
                    onSuccess={(res) => {
                    console.log(res)
                    }}
                    ref={paystackWebViewRef}
                  />

                    <Button  
                      preset="default" 
                      pressedStyle={{ backgroundColor: colors.palette.primary }}
                      text="Donate" onPress={()=> paystackWebViewRef.current.startTransaction()}/>
                      
                  </View>
            
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>

    
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $cardContainer: ViewStyle = {
  padding: 15
}


const $donateImage: ImageStyle = {
  height: 150,
  width: "100%",
  borderRadius: 10,
  marginTop: 10,
}

const $cardStyle = {
  borderWidth: 0
}

const $bottomSheetContainer: ViewStyle = {
  backgroundColor: '#fff',
  padding: 16,
}

const $inputStyle = {
backgroundColor: colors.palette.light,
borderRadius: 5,
borderWidth: 1,
height: 50,
borderColor: colors.palette.primary,
marginTop: 10,
fontSize: 20
}

const $continueButton = {
  backgroundColor: colors.palette.primary,
  marginTop: 30
}

