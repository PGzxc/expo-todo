import {useEffect, useState} from 'react'
import {SafeAreaView, View, Text, Image, StatusBar, TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import * as Utils from '../../utils/Utils'
import * as ToastUtils from '../../utils/ToastUtils'

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (Utils.isEmpty(email) || Utils.isEmpty(password)) {
            ToastUtils.failToast('email或密码为空')
            return
        }
        navigation.navigate('BottomTab')
    }
    const handleRegister = () => {
        setEmail("")
        setPassword("")
        navigation.navigate('RegisterPage')
    }

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <StatusBar barStyle={'light-content'}/>
            <Image source={require('../../../assets/splash_bg.png')}
                   style={{position: 'absolute', width: '100%', height: '100%'}} blurRadius={50}/>
            <View>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#ffffff',
                    margin: 30
                }}>登录</Text>
                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    margin: 25
                }}>
                    <MaterialIcons name="alternate-email" size={24} color="black" style={{marginRight: 5}}/>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Email ID'
                               style={{flex: 1, paddingVertical: 0}} keyboardType="email-address"/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    margin: 25
                }}>
                    <Ionicons name="lock-closed" size={24} color="black"/>
                    <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Password'
                               style={{flex: 1, paddingVertical: 0}} secureTextEntry={true}/>

                    <TouchableOpacity onPress={() => {
                    }}>
                        <Text style={{color: '#ffffff', fontWeight: '700'}}>忘了?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleLogin} style={{
                    backgroundColor: 'black',
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                    marginBottom: 30
                }}>
                    <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#ffffff'}}>登录</Text>
                </TouchableOpacity>


                <Text style={{textAlign: 'center', color: '#edebe4', marginBottom: 30}}>更多登录方式</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                    <TouchableOpacity>
                        <AntDesign name="QQ" size={35} color='#f5f3f0'/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Entypo name="github" size={35} color='#f5f3f0'/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="google" size={35} color='#f5f3f0'/>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                    <Text>没有账号?</Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={{color: '#ffffff', fontWeight: '700'}}> 去注册</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default LoginPage
