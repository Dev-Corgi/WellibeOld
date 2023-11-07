import {
  NavigationContainer,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'; // Stack 네비게이션
import {StyleSheet, Image, View, Text, Easing} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import Button1 from '../components/Button1';
import Registration1 from './Registration1';
import Registration2 from './Registration2';
import Registration3 from './Registration3';
import Registration4 from './Registration4';
import SlideMotion from '../motions/SlideMotion';

const Registration = () => {
  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();

  const [index, setindex] = useState(1);

  // 버튼을 누를 때 다른 스크린으로 이동하려면 아래와 같이 navigation.navigate를 사용할 수 있습니다.

  const screenList = [
    {name: 'Registration1', screen: Registration1},
    {name: 'Registration2', screen: Registration2},
    {name: 'Registration3', screen: Registration3},
    {name: 'Registration4', screen: Registration4},
  ];

  const onPressHandler = () => {
    setindex(prev => prev + 1);
    navigation.navigate(screenList[index].name);
  };

  return (
    <View style={styles.view}>
      <View style={styles.frame}>
        <View style={styles.headerFrame}>
          <Image
            style={styles.backButton}
            source={require('../assets/img/backButton.png')}></Image>
          <Text style={styles.headerTitle}>{'이름 선택'}</Text>
          <View style={styles.progressbarOut}>
            <View style={styles.progressbarIn}></View>
          </View>
        </View>
        <Stack.Navigator
          // screenOptions={{
          //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // }}
          >
          {screenList.map((screen, index) => {
            return (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.screen}
                options={{headerShown: false}}
              />
            );
          })}
        </Stack.Navigator>
        <Button1
          style={{position: 'absolute', bottom: 36}}
          text={'다움'}
          onPress={onPressHandler}></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frame: {
    position: 'relative',
    width: 334,
    height: 751,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
  },

  headerFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 326,
    height: 49,
  },

  backButton: {
    position: 'absolute',
    top: 5,
    left: 0,
    width: 7.65,
    height: 14.24,
  },

  headerTitle: {
    position: 'relative',
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 20,
    color: Color.black,
  },

  progressbarOut: {
    width: 326,
    height: 3,
    marginTop: 12,
    borderRadius: 500,
    backgroundColor: Color.colorWhitesmoke_100,
  },

  progressbarIn: {
    width: 76,
    height: 3,
    borderRadius: 500,
    backgroundColor: Color.colorKhaki,
  },

  contentFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black,
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 20,
  },

  inputfieldFrame: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.colorWhitesmoke_100,
    marginTop: 27,
  },

  inputfieldText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black,
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.grey,
    width: '100%',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },

  slideFrame: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: 45,
  },
});

const config = {
  animation: 'timing',
  config:{
    duration:500,
    easing:Easing.ease
  }
}

export default Registration;
