import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {AppNavi} from "./src/route/router";
import {ToastProvider} from "react-native-toast-notifications";

export default function App() {
    return (
        <ToastProvider>
            <NavigationContainer>
                <AppNavi/>
            </NavigationContainer>
        </ToastProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
