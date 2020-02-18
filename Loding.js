import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

//모든게 View 감싸져 있어야 하고(div) 모든 텍스트는 Text에

export default function Loding() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={style.text}>Getting the Weather</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#fdf6aa"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 26
    }
});
