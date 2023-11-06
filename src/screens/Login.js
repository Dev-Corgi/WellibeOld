import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Color} from '../GlobalStyles';

const Login = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.backgroundImg}
        source={require('../assets/img/loginbackground.png')}>
      </Image>
        <View style = {styles.frame}>
        <Image
        style={styles.textLogo}
        source={require('../assets/img/textlogo.png')}>
        </Image>
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
    alignItems:'center'
  },

  frame:{
    backgroundColor:Color.subBlue,
    position:'relative',
    width: 308,
    height: 724,
  },

  backgroundImg:{
   position: 'absolute',
   overflow: "hidden",
   flex:1,
   width:"100%",
   height:"100%"
  },

  textLogo:{
    position: 'relative',
    width:142.24,
    height:25
  }

});

export default Login;
