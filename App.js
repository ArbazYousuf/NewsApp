import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from "./Page/Home";
import Sources from "./Page/Sources";
import Articles from "./Page/Articles";
import ArticleDetail from "./Page/ArticleDetail";
import SplashScreen from "./Component/SplashScreen";
import { StyleSheet } from "react-native";
import { persistor, store } from "./redux/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Home" component={Home}
              options={{
                title: 'News App',
                headerStyle: styles.headerContainer,
                headerTitleStyle: styles.headerText,
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="Sources" component={Sources}
              options={{
                title: 'Sources',
                headerStyle: styles.headerContainer,
                headerTitleStyle: styles.headerText,
                headerTitleAlign: 'center',
                headerLeft: null
              }}
            />
            <Stack.Screen
              name="Articles" component={Articles}
              options={{
                title: 'Articles',
                headerStyle: styles.headerContainer,
                headerTitleStyle: styles.headerText,
                headerTitleAlign: 'center',
                headerLeft: null
              }}
            />
            <Stack.Screen
              name="ArticleDetail" component={ArticleDetail}
              options={{
                title: 'Article',
                headerStyle: styles.headerContainer,
                headerTitleStyle: styles.headerText,
                headerTitleAlign: 'center',
                headerLeft: null
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#30809b"
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'InterBold',
    alignItems: "center",
    color: "white"
  },
});

export default App;