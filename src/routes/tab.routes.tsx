import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { StatusBar } from "react-native";
import { propsNavigationStack } from "./types";
import Profile from "../screens/Profile";
import { useTheme } from "../context/ThemeContext";
import Query from "../screens/Query";
import shadow from "../utils/styles";
import Duvidas from "../screens/Duvidas";

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>();

export default function TabRoutes() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={theme.COLORS.PRIMARY}
        barStyle="light-content"
      />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
              backgroundColor: theme.COLORS.BACKGROUND,
              position: "absolute",
              borderTopColor: "transparent",
              padding: 15,
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              borderRadius: 30,
              height: 80,
              ...shadow.shadowOverlay,
          },
        }}
      >
        <Screen
          name="Duvidas"
          component={Duvidas}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="info"
                size={focused ? size + 5 : size}
                color={focused ? theme.COLORS.PRIMARY : theme.COLORS.TITLE}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Screen
          name="Query"
          component={Query}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="calendar"
                size={focused ? size + 5 : size}
                color={focused ? theme.COLORS.PRIMARY : theme.COLORS.TITLE}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="user"
                size={focused ? size + 5 : size}
                color={focused ? theme.COLORS.PRIMARY : theme.COLORS.TITLE}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
      </Navigator>
    </>
  );
}
