import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ReadStory from "./Screens/ReadStory";
import WriteStory from "./Screens/WriteStory";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return( <AppContainer />)
  }
}

const tabNav = createBottomTabNavigator(
  {
    ReadStory: { screen: ReadStory },
    WriteStory: { screen: WriteStory },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if (routeName === "ReadStory") {
          return (
            <Image
              source={require("./Images/read.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "WriteStory") {
          return (
            <Image
              source={require("./Images/write.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      }
    }),
  }
);
const AppContainer = createAppContainer(tabNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
