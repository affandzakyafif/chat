import React from 'react'
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native'

class App extends React.Component {
    constructor() {
        super();
        this.loadApp()
    }
    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'Apk' : 'Auth')
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifycontent: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

export default App
