import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler'
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false,

          }}/>
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
