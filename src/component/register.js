import React from 'react'
import {View,Text,TextInput,TouchableOpacity,Alert,ImageBackground,ScrollView} from 'react-native'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            username:'',
            password:'',
            name:'',
            email:'',
            no_telp:'',

        }
    }

    Register=()=>{
        const{username}=this.state;
        const{password}=this.state;
        const{name}=this.state;
        const{email}=this.state;
        const{no_telp}=this.state
        return fetch('https://calm-mesa-84057.herokuapp.com/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                username:username,
                password:password,
                name:name,
                email:email,
                no_telp:no_telp
            }),
        })
        .then(response => response.json())
            .then((responseJson)=>{
                console.log(responseJson)
                Alert.alert('sukses')
                if (responseJson.access_token){
                    this.props.navigation.navigate('Login')
                }   
            }).catch((error)=>{
                console.error(error)
            })
    }

    render(){
        let{username,password,no_telp,email,name}=this.state
        return(
            <View style={{flex:1}}>
            <ScrollView>
                <ImageBackground source={require('../../sdr/assets/images (4).jpeg')} style={{ width: '100%', height: '100%' }}>
                <View style={{alignItems:'center',marginTop:100}}>
                    <Text style={{fontSize:34}}>REGISTER</Text>
                    <Text>please register</Text>
                </View>
                <View style={{alignItems:'center',marginTop:50}}>
                    <TextInput
                        placeholder='username'
                        onChangeText={username => this.setState({username})} 
                        style={{borderBottomWidth:2,width:355,marginTop:10}}
                    />
                    <TextInput
                        placeholder='password'
                        onChangeText={password => this.setState({password})} 
                        style={{ borderBottomWidth: 2, width: 355,marginTop:10 }}
                    />
                    <TextInput
                        placeholder='name'
                        onChangeText={name => this.setState({name})} 
                        style={{ borderBottomWidth: 2, width: 355,marginTop:10 }}
                    />  
                    <TextInput
                            placeholder='no telp'
                            onChangeText={no_telp => this.setState({ no_telp })}
                            style={{ borderBottomWidth: 2, width: 355, marginTop: 10 }}
                    /> 
                    <TextInput
                            placeholder='email'
                            onChangeText={email => this.setState({ email})}
                            style={{ borderBottomWidth: 2, width: 355, marginTop: 10 }}
                    /> 
                 
                    <View style={{borderWidth:2,height:50,width:150,alignItems:'center',justifyContent:'center',marginTop:50}}>
                        <TouchableOpacity onPress={()=>this.Register(
                            username,password,name,no_telp,email
                        )}>
                            <Text>DAFTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
                </ScrollView>
            </View>
        )
    }
}
export default App