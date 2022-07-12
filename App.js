import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import Home from './src/pages/Home'
import Settings from './src/pages/Settings'
import Ledger from './src/components/Ledger'
import Account from './src/pages/Account'
import Notes from './src/pages/Notes'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Ledger" component={Ledger} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <Text>Ctr Shift RN version!</Text>
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
