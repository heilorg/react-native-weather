import React from "react";
import axios from "axios";
import Loding from "./Loding";
import Weather from "./Weather";
import { Alert } from "react-native";
import * as Locaion from "expo-location";

const API_KEY = "246866977a2c964a57c055c43fd55cc6";
("http://api.openweathermap.org/data/2.5/weather?lat=37.2740856&lon=126.9751715&appid=246866977a2c964a57c055c43fd55cc6");

export default class App extends React.Component {
    state = {
        isLoding: false
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather
            }
        } = await axios.get(`
      http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
      `);
        this.setState({ isLoding: true, temp, condition: weather[0].main });
    };
    getLocation = async () => {
        try {
            await Locaion.requestPermissionsAsync();
            const {
                coords: { latitude, longitude }
            } = await Locaion.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert("Can't find you", "So sad");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
    render() {
        const { isLoding, temp, condition } = this.state;
        return !isLoding ? (
            <Loding />
        ) : (
            <Weather temp={Math.round(temp)} condition={condition} />
        );
    }
}
