import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const Button1 = ({text}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        position: "relative",
        width: 340,
        height: 57,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 16,
        backgroundColor: Color.navy
    },

    text: {
        position: "relative",
        width: "auto",
        fontSize: 16,
        textAlign: "center",
        fontFamily : FontFamily.PretendardBold,
        color: Color.white
    }

});

export default Button1;
