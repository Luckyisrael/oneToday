import React from "react"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { ViewStyle, TextStyle } from "react-native"
import { Icon } from "app/components"
import { colors, spacing, typography } from "app/theme"
import {
 HomeScreen, ShowcaseScreen, EventsScreen, ProfileScreen
} from "app/screens"
import { translate } from "../i18n"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { useSafeAreaInsets } from "react-native-safe-area-context"


export type HomeNavigatorParamList = {
  HomeScreen: undefined;
  ShowcaseScreen: undefined;
  EventsScreen: undefined;
  ProfileScreen: undefined;
}

export type HomeTabScreenProps<T extends keyof HomeNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeNavigatorParamList>()


export const HomeNavigator = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: translate("homeScreen.homeTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="home" color={focused ? colors.palette.primary : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ShowcaseScreen"
        component={ShowcaseScreen}
        options={{
          tabBarLabel: translate("homeScreen.showcaseTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="showcase" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          tabBarAccessibilityLabel: translate("homeScreen.eventsTab"),
          tabBarLabel: translate("homeScreen.eventsTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="eventIcon" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: translate("homeScreen.ProfileTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="profile" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}

