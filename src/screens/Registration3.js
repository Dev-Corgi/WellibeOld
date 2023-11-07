import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import Button1 from '../components/Button1';
import RegistrationInfo from '../components/RegistrationInfo';
const Registration2 = () => {

  return (
    <View style={styles.view}>
      <View style={styles.frame}>
        <View style={styles.headerFrame}>
          <Image style={styles.backButton} source={require("../assets/img/backButton.png")}></Image>
          <Text style={styles.headerTitle}>{"출생 년도"}</Text>
          <View style={styles.progressbarOut}>
            <View style={styles.progressbarIn}></View>
          </View>
        </View>
        <View style={styles.contentFrame}>
          <Text style={styles.title}>{"웰리님의\n출생연도를 알려주세요"}</Text>
          <RegistrationInfo style = {{marginTop : 26}} text={"서비스 고도화를 위해 저희만 알고 있을게요"}></RegistrationInfo>
          <View style={styles.inputfieldFrame}>
            <Text style={styles.inputfieldText}>1998</Text>
          </View>
          <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
        </View>
        <Button1 text = {"다움"}></Button1>
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
    alignItems: 'center'
  },

  frame: {
    position: "relative",
    width: 334,
    height: 751,
    display: 'flex',
    flexDirection: "column",
    zIndex: 1
  },

  headerFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 326,
    height: 49,
  },

  backButton: {
    position: "absolute",
    top: 5,
    left: 0,
    width: 7.65,
    height: 14.24
  },

  headerTitle: {
    position: "relative",
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 20,
    color: Color.black
  },

  progressbarOut: {
    width: 326,
    height: 3,
    marginTop: 12,
    borderRadius: 500,
    backgroundColor: Color.colorWhitesmoke_100
  },

  progressbarIn: {
    width: 76,
    height: 3,
    borderRadius: 500,
    backgroundColor: Color.colorKhaki
  },

  contentFrame: {
    position: "relative",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    width: 329,
    height: 613,
    marginTop: 20,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black,
    lineHeight: 34,
    width: "100%",
    textAlign : "left",
    marginBottom: 20,
  },

  inputfieldFrame: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.colorWhitesmoke_100,
    marginTop : 27
  },

  inputfieldText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.grey,
    width: "100%",
    fontSize: 12,
    marginTop: 14,
    textAlign: "center"
  }

});

export default Registration2;
