import React from 'react'
import{View,Text,TouchableOpacity,Image,AsyncStorage,FlatList} from 'react-native'
import ActionButton from 'react-native-action-button';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pro:[],
        }
    }
    logout = async () => {
        AsyncStorage.removeItem('access_token')
        this.props.navigation.navigate('Login')
    }
    updatepassword=()=>{
        return fetch('http://rocky-sierra-75836.herokuapp.com/api/update/password')
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            this.setState({
                pro:responseJson
            })
        })
        .catch((error)=>console.log({
            error
        }))
    }
    componentDidMount(){
        this.updatepassword()
    }
renderItems=({item})=>{
    const {id,password}=item
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style={{fontSize:20}}>id:{id}</Text>
                    <Text style={{fontSize:20}}>name:{password}</Text>
                    
                </View>
            </View>
        )
    
}
        render(){
            return(
                <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.pro}
                    keyExtractor={(item)=>item.toString()}
                    renderItem={this.renderItems}
                />
                <ActionButton buttonColor='green'>
                    <ActionButton.Item onPress={this.logout} buttonColor='#ff4500'>
                        <Image source={require('../../sdr/assets/logout.png')} style={{ width: 24, height: 24 }} />
                    </ActionButton.Item>
                </ActionButton>
                </View>
            )
        }
}

export default App