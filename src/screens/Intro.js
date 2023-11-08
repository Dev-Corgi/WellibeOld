import * as React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import Button1 from '../components/Button1';      
import MessageFrame from '../components/MessageFrame';
import {useNavigation} from '@react-navigation/native';
const Intro = () => {

  const sloganMessage = "삶을 바꾸는\n건강한 자신감"
  const subSloganMessage = "1분 만에 루틴 추천맏고\n건강한 자신감을 만들어보세요"

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
    <Image style = {styles.background} source={require("../assets/img/introBackground.png")}/>
    <LinearGradient
      colors={['#ffffff00', '#ffffffff']}
      style={styles.foreground}
    />
    <View style = {styles.frame}>
      <View style = {styles.messageFrame}>
        <MessageFrame text = {"반갑습니다."}/>
        <MessageFrame text = {"저는 AI코치 웰리입니다."}/>
        <MessageFrame text = {"회원님께 필요한 트레이닝을 추천하기 위해\n몇가지 질문을 드릴게요."}/>
      </View>
    </View>
    <Button1 style={{position: "absolute", bottom: 36}} text = {"종아요"} onPress={() => navigation.navigate("Registration")}></Button1>
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
    alignItems: 'center'
  },

  frame: {
    position: "relative",
    marginTop: 342,
    height: 423,
    width: 344,
    display: 'flex',
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: Color.subBlue
  },

  messageFrame: {
    position: "absolute",
    height: 350,
    width: 344,
    display: 'flex',
    flexDirection: "column",
    overflow: "hidden",
    gap:11,
    paddingBottom: 16,
    backgroundColor: Color.black
  },

  foreground:{
    position: "absolute",
    width: "100%",
    height: 402,
    bottom:0
  },

  background:{
    position: "absolute",
    width: "100%",
    height : "100%",
    resizeMode: "cover"
  }

});

export default Intro;
