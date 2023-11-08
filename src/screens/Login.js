import * as React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import LoginButton from '../components/LoginButton';
import {useNavigation} from '@react-navigation/native';
const Login = () => {

  const sloganMessage = "삶을 바꾸는\n건강한 자신감"
  const subSloganMessage = "1분 만에 루틴 추천맏고\n건강한 자신감을 만들어보세요"

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image style={styles.backgroundImg} source={require('../assets/img/loginbackground.png')}></Image>
        <View style={styles.frame}>
          <Image
            style={styles.textLogo}
            source={require('../assets/img/textlogo.png')}>
          </Image>
          <Text style={styles.slogan}>
            {sloganMessage}
          </Text>
          <Text style={styles.subSlogan}>
            {subSloganMessage}
          </Text>
          <View style={styles.loginButtonFrame}>
            <LoginButton backgroundColor={Color.kakaoYellow} logo={require('../assets/img/kakaologo.png')} text={"카카오 로그인"} onPress={() => navigation.navigate("Intro")}></LoginButton>
            <LoginButton backgroundColor={Color.white} logo={require("../assets/img/googlelogo.png")} text={"구글로 로그인"} onPress={() => navigation.navigate("Intro")}></LoginButton>
          </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImg: {
    position: 'absolute',
    overflow: "hidden",
    flex: 1,
    width: "100%",
    height: "100%",
  },

  textLogo: {
    position: 'relative',
    width: 142.24,
    height: 25,
    marginLeft:9.5
  },

  slogan: {
    position: 'relative',
    marginTop: 415,
    marginLeft:9.5,
    fontSize: 30,
    color : Color.white,
    fontFamily : FontFamily.PretendardBold
  },

  subSlogan: {
    position: "relative",
    marginTop: 24,
    marginLeft:9.5,
    fontSize: 18,
    color : Color.white,
    fontFamily : FontFamily.PretendardRegular
  },

  loginButtonFrame: {
    position: "relative",
    marginTop: 31,
    width: "100%",
    height: "auto",
    display: 'flex',
    flexDirection: "column",
    gap: 15,
  },

  frame: {
    position: "relative",
    width: 327,
    height: 724,
    display: 'flex',
    flexDirection: "column",
  }

});

export default Login;
