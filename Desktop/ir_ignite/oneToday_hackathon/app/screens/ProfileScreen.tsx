/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */

import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TouchableOpacity, View, ViewStyle, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text } from "app/components"
import BottomSheet from "@gorhom/bottom-sheet"
import { colors } from "app/theme"


interface ProfileScreenProps extends AppStackScreenProps<"Profile"> {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const initialUserProfile: UserProfile = {
  name: 'Lucky Israel',
  email: 'Luckyisrael4real@gmail.com',
  phoneNumber: '123-456-7890',
  address: 'Anywhere Main St, Nigeria',
};

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);
  const [editingProfile, setEditingProfile] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleEditPress = () => {
    setEditingProfile(true);
    bottomSheetRef.current?.expand();
  };

  const handleSavePress = (updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile);
    setEditingProfile(false);
    bottomSheetRef.current?.collapse();
  };


  return (
    <Screen 
      style={$container}
      preset="scroll"
      safeAreaEdges={["top", "bottom"]} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ justifyContent: 'center'}}
      KeyboardAvoidingViewProps={{ behavior: "padding" }}
    >
      <Header 
          containerStyle={{ backgroundColor: colors.palette.primary, borderRadius: 10 , alignSelf: 'flex-start' }} 
          title="Profile"
         // titleContainerStyle={{ backgroundColor: colors.palette.primary, borderRadius: 10 }}
          style={{ height: 80, borderRadius: 10 }}
          // backgroundColor="blue"
          safeAreaEdges={[]} 
        />
     <View style={{marginTop: 10}}>
       
      <Text style={$label} >Name:</Text>
        <Text style={$text}>{userProfile.name}</Text>

        <Text style={$label}>Email:</Text>
        <Text style={$text}>{userProfile.email}</Text>

        <Text style={$label}>Phone Number:</Text>
        <Text style={$text}>{userProfile.phoneNumber}</Text>

        <Text style={$label}>Address:</Text>
        <Text style={$text}>{userProfile.address}</Text>

        <Button textStyle={{color: 'white'}} text="Edit Profile" style={$editButton} onPress={handleEditPress} />
     </View>

      {editingProfile ? (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={['25%', '50%', '90%']}
          style={$bottomSheet}
        >
          <View style={$bottomSheetContent}>
            <Text style={$bottomSheetTitle}>Edit Profile</Text>

            <TextInput
              style={$input}
              placeholder="Name"
              value={userProfile.name}
              onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
            />

            <TextInput
              style={$input}
              placeholder="Email"
              value={userProfile.email}
              onChangeText={(text) => setUserProfile({ ...userProfile, email: text })}
            />

            <TextInput
              style={$input}
              placeholder="Phone Number"
              value={userProfile.phoneNumber}
              onChangeText={(text) => setUserProfile({ ...userProfile, phoneNumber: text })}
            />

            <TextInput
              style={$input}
              placeholder="Address"
              value={userProfile.address}
              onChangeText={(text) => setUserProfile({ ...userProfile, address: text })}
            />

            <Button 
              textStyle={{color: 'white'}} 
              text="Save" 
              style={$editButton} 
              onPress={() => handleSavePress(userProfile)} />
          
          </View>
        </BottomSheet>
      ) : (
        null
      )}
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  padding: 20,
}
const $label: TextStyle ={
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
}
const $text: TextStyle ={
  fontSize: 18,
  marginTop: 10,
}
const $editButton: ViewStyle = {
  backgroundColor: colors.palette.primary,
  padding: 10,
  borderRadius: 5,
  alignSelf: 'center',
  marginTop: 20,
  width: '100%'
}
const $bottomSheet: ViewStyle = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
}
const $bottomSheetContent: ViewStyle = {
  padding: 16,
}
const $bottomSheetTitle: TextStyle ={
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
}
const $input: TextStyle = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginVertical: 8,
  padding: 10,
  borderRadius: 5,
}
const $saveButton: ViewStyle = {
  backgroundColor: '#3498db',
  padding: 10,
  borderRadius: 5,
  alignSelf: 'flex-start',
}
const $saveButtonText: TextStyle = {
  color: '#fff',
  fontWeight: 'bold',
}