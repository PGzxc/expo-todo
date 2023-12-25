import React from 'react'
import {Text, View} from 'react-native'
import {StyleSheet} from 'react-native'
import Completed from '../../assets/Completed.svg'
import Circle from '../../assets/Circle.svg'
import Trash from '../../assets/Trash.svg'

type Props = {
    details: string
    isComplete: boolean
    onRemove: () => void
    onComplete: () => void
}

export function Task({details, isComplete, onRemove, onComplete}: Props) {
    return (
        <View style={styles.container}>
            {isComplete ? (<Completed onPress={onComplete}/>) : (<Circle onPress={onComplete}/>)}
            <Text style={[styles.taskDetails, isComplete && styles.taskCompleted]}> {details} </Text>
            <Trash height={18} width={18} onPress={onRemove}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 8,
        padding: 12,
        gap: 8,

        minWidth: '100%',
        minHeight: 64,

        backgroundColor: '#262626',

        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 1,
    },
    taskDetails: {
        flex: 1,

        color: '#F2F2F2',
        fontSize: 14,
    },
    taskCompleted: {
        color: '#808080',
        textDecorationLine: 'line-through'
    }
})

