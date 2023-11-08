import React  from "react";

import{
    StyleSheet,
    View,
    Text
} from 'react-native'

import { Color,FontFamily } from "../GlobalStyles";

import {moderateScale } from "react-native-size-matters";

class MessageBubble extends React.Component{
render(){
    return(
        <View style = {styles.message}>
         <View
         style = {[
            styles.cloud
         ]}
         >
            <Text style = {styles.text}>{this.props.message}</Text>
         </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    message:{
      flexDirection: "row",
    },
    
    cloud: {
        maxWidth: 270,
        paddingHorizontal: 14,
        paddingVertical:12,
        borderRadius: 10,
        backgroundColor : Color.white
    },

    text:{
        fontSize: 14,
        fontFamily : FontFamily.PretendardRegular,
        lineHeight: 18,        
        color: Color.black
    }
})

export default MessageBubble;