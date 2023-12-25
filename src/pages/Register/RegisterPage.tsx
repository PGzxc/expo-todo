import {SafeAreaView, View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import * as Utils from '../../utils/Utils'
import * as ToastUtils from '../../utils/ToastUtils'
import {useEffect, useState} from 'react'

const RegisterPage = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');

    const handleRegister = () => {

        if (Utils.isEmpty(email) || Utils.isEmpty(name) || Utils.isEmpty(password) || Utils.isEmpty(cnfpassword)) {
            ToastUtils.failToast('输入为空，请确认')
            return
        }
        // if (password !== cnfpassword) {
        //     alert("密码不匹配");
        //     return;
        // }
        navigation.navigate('BottomTab')
    }

    const handleLogin = () => {
        setName("")
        setEmail("")
        setPassword("")
        setCnfPassword("")
        navigation.navigate('LoginPage')
    }


    return (

        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <StatusBar barStyle={'light-content'}/>
            <Image source={require('../../../assets/leaves.jpg')}
                   style={{position: 'absolute', width: '100%', height: '100%'}} blurRadius={50}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#ffffff',
                    margin: 30
                }}>注册</Text>
                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    margin: 20
                }}>
                    <Entypo name="user" size={24} color="black" style={{marginRight: 5}}/>
                    <TextInput value={name} onChangeText={text => setName(text)} placeholder='Name'
                               style={{flex: 1, paddingVertical: 0}}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    margin: 20
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
                    margin: 20
                }}>
                    <Ionicons name="lock-closed" size={24} color="black"/>
                    <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Password'
                               style={{flex: 1, paddingVertical: 0}} secureTextEntry={true}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    margin: 20
                }}>
                    <Ionicons name="lock-closed" size={24} color="black"/>
                    <TextInput value={cnfpassword} onChangeText={text => setCnfPassword(text)}
                               placeholder='Confirm-Password'
                               style={{flex: 1, paddingVertical: 0}} secureTextEntry={true}/>

                </View>

                <TouchableOpacity onPress={handleRegister} style={{
                    backgroundColor: 'black',
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                    marginBottom: 30
                }}>
                    <Text
                        style={{textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#ffffff'}}>注册</Text>
                </TouchableOpacity>

                <Text style={{textAlign: 'center', color: '#edebe4', marginBottom: 30}}>更多注册方式</Text>

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

                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                    <Text>已有账户?</Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={{color: '#ffffff', fontWeight: '700'}}> 去登陆</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterPage;
