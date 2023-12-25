import {Text, View} from 'react-native'
import Clipboard from '../../assets/Clipboard.svg'
import {StyleSheet} from 'react-native'

export function EmptyTasks() {
    return (
        <View style={styles.container}>
            <Clipboard/>
            <Text style={styles.title}>尚未创建任务</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',

        borderTopColor: '#333333',
        borderTopWidth: 1,

        paddingHorizontal: 20,
        paddingVertical: 48,
    },
    title: {
        marginTop: 16,

        color: '#808080',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        color: '#808080',
        fontSize: 14,
    },
})
