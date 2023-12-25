import {useState} from "react";
import {format} from "date-fns";
import {SafeAreaView, withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import {Calendar} from "react-native-calendars";
import {Text} from "react-native";

const MePage = ({navigation, route}) => {


    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
           <Text>Me</Text>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(MePage);
