import React from 'react'
import {View} from 'react-native'
import {StyleSheet} from 'react-native'
import Logo from '../../assets/Logo.svg'

export function Header() {
    return (
        <View style={styles.container}>
            <Logo/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        height: 173,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
