import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack 네비게이션
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Intro from './src/screens/Intro';
import Registration from './src/screens/Registration';
import Registration2 from './src/screens/Registration2';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModalSample from './src/components/DatePickerSample';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="LogIn"
          component={Login}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Registration2"
          component={Registration2}
          options={{ headerShown: false }}
        /> */}
                <Stack.Screen
          name="DateTimePickerModalSample"
          component={DateTimePickerModalSample}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
