import React from 'react'
import {View,Text,TouchableOpacity,Image,Platform,Dimensions} from 'react-native'
import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../component/home'
import Login from '../component/login'
import Register from '../component/register'
import Ubah from '../component/ubah'
import Load from '../component/load'
import Ubahpassword from '../component/ubah password'
import Ubahprofil from '../component/ubah profil'



const gambar = require ('../../sdr/assets/list.png')

const App = createStackNavigator({
 
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
         screen:Register,
         navigationOptions:{
             header:null
         }   
    },

})
const Drawer = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Really',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <View style={{ paddingHorizontal: 10 }}>
                        <Image source={gambar} style={{ width: 24, height: 24 }} />
                    </View>
                </TouchableOpacity>
            ),

        })
    }, 
    Ubahprofil: {
        screen: Ubahprofil,
        navigationOptions: {
            header: null
        }
    },
    Ubahpassword:{
        screen:Ubahpassword,
        navigationOptions:{
            header:null
        }
    }
})
const Appp = createDrawerNavigator({
    Home:Drawer,
    pengaturan:{
        screen:Ubah
    },
    
})
const AppStack = createSwitchNavigator({
    load:Load,
    Auth:App,
    Apk:Appp
})
export default createAppContainer(AppStack);