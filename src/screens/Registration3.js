import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import Button1 from '../components/Button1';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
const Registration3 = () => {
  return (
    <>
      <Text style={styles.title}>{'성별이\n어떻게 되시나요?'}</Text>
      <RegistrationInfo
        style={{marginTop: 26}}
        text={'서비스 고도화를 위해 저희만 알고 있을게요'}></RegistrationInfo>
      <View style={styles.contentFrame}>
          <SelectionList selections={['남성', '여성', '기타']}></SelectionList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  },

  inputfieldFrame2: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.colorKhaki,
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

  selectionFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },
});

export default Registration3;
