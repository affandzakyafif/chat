import React from 'react'
import {View,Text,TextInput,TouchableOpacity,AsyncStorage,ImageBackground} from 'react-native'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',

        }
    }
    componentDidMount(){
        AsyncStorage.getItem('access_token').then(value=>{
            if (value!=null){
                this.props.navigation.navigate('Home')
            }
        })
    }
        Login=()=>{
            const{username,password}= this.state;
            fetch('https://calm-mesa-84057.herokuapp.com/login',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                })
            }).then((response)=>response.json())
                .then((responseJson)=>{
                    console.log(responseJson)
                    if (responseJson.access_token)
                    {
                        AsyncStorage.setItem('id', JSON.stringify(responseJson.user.id))
                        AsyncStorage.setItem('name', responseJson.user.name)
                        AsyncStorage.setItem('email', responseJson.user.email)
                        AsyncStorage.setItem('no_telp', JSON.stringify(responseJson.user.no_telp))
                        AsyncStorage.setItem('access_token', responseJson.access_token)
                        this.props.navigation.navigate('Home')
                    }else if(this.state.password === ''){
                        alert('password salah')
                    }  
                }).catch((error)=>{
                    console.log('error')
                })
        }

    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={require('../../sdr/assets/istockphoto-1140188575-170667a.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={{alignItems:'center',marginTop:50}}>
                    <Text style={{fontSize:34}}>LOGIN</Text>
                    <Text>Welcome to my application</Text>
                </View>
                <View style={{alignItems:'center',marginTop:50}}>
                    <TextInput
                        placeholder='username' 
                        style={{borderBottomWidth:2,width:300}}
                         onChangeText={username => this.setState({ username })}
                    />
                    <TextInput
                        placeholder='password' 
                        onChangeText={password => this.setState({ password })} 
                        style={{borderBottomWidth:2,width:300,marginTop:70}}
                        secureTextEntry={true}
                        
                    />
                    <View style={{ alignItems: 'center',justifyContent:'center',borderWidth:2,
                    height:50,width:150,marginTop:70,borderRadius:10,backgroundColor:'#ee82ee',borderColor:'#ee82ee'}}> 
                        <TouchableOpacity onPress={this.Login}>
                            <Text style={{fontSize:20,color:'black'}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginTop:100}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                        <View>
                            <Text style={{borderBottomWidth:2}}>register</Text>
                         </View>
                           </TouchableOpacity>
                     </View>
                     </View>
                </ImageBackground>
            </View>
        )
    }
}
export default App