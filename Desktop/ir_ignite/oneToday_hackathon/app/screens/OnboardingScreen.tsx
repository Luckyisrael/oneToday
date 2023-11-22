---
patches:
- path: "app/screens/index.ts"
  append: "export * from \"./OnboardingScreen\"\n"
  skip: 
- path: "app/navigators/AppNavigator.tsx"
  replace: "// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
  insert: "Onboarding: undefined\n\t// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
- path: "app/navigators/AppNavigator.tsx"
  replace: "{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
  insert: "<Stack.Screen name=\"Onboarding\" component={Screens.OnboardingScreen} />\n\t\t\t{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
  skip: 
---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface OnboardingScreenProps extends AppStackScreenProps<"Onboarding"> {}

export const OnboardingScreen: FC<OnboardingScreenProps> = observer(function OnboardingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="onboarding" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
