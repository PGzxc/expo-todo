import {SafeAreaView, withSafeAreaInsets} from "react-native-safe-area-context";
import {Text, View} from 'react-native';
import {commonStyles} from "../../styles/common";
import {useState} from "react";
import {format} from "date-fns";
import {Calendar} from 'react-native-calendars';

const CalendarPage = ({navigation, route}) => {
    const [day, setday] = useState(format(new Date(), "yyyy-MM-dd"))

    const markedDates = {
        [day]: {selected: true},

    }
    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <Calendar
                monthFormat={'yyyy MM'}
                markedDates={markedDates}
                theme={{
                    selectedDayBackgroundColor: 'blue',
                    todayTextColor: 'FFFF00',
                    todayBackgroundColor: 'FFFF00'
                }}
                onDayPress={(day) => {
                    setday(day.dateString)
                }}/>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(CalendarPage);
