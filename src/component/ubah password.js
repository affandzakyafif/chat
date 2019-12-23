import React from 'react'
import { View, Text, TextInput, Button, Alert, ScrollView,AsyncStorage} from 'react-native'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            id:'',
            username:'',
            password:''

        }
    }
    componentDidMount() {
        AsyncStorage.getItem('access_token').then(value => {
            if (value != null) {
                this.props.navigation.navigate()
            }
        })
        AsyncStorage.getItem('id').then(value => {
            if (value != null){
                this.setState({id:value})
            }
        })
        // AsyncStorage.getItem('phone').then(value => {
        //     if (value != null) {
        //         this.setState({ phone: value })
        //     }
        // })
    }
    ubahpassword=()=>{
        const {id,username,password} = this.state;
        
        return fetch('https://calm-mesa-84057.herokuapp.com/private/edit', {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            username: username,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            alert('sukses');
          })
          .catch(error => {
            console.error(error);
          });
    
}
render() {
        return (
            <View style={{ flex: 1}}>
            <View style={{alignItems:'center',marginTop:200}}>
                <Text style={{fontSize:25}}> ubah password anda </Text>
                </View>   
                <ScrollView>
                    <View style={{ paddingHorizontal: 30,marginTop:20 }}>
                   
                        <TextInput
                            placeholder='ketik'
                            onChangeText={text=>this.setState({username:text})}
                            style={{ padding: 10, borderWidth: 1, margin: 30 }} />
                        <TextInput
                            placeholder='ketik'
                            onChangeText={text => this.setState({ password: text })}
                            style={{ padding: 10, borderWidth: 1, margin: 30 }} />
                        <View style={{ paddingHorizontal: 50, marginLeft:150}}>
                        <Button style={{ width: 50 }} title='kirim' onPress={this.ubahpassword} />
                            </View>
                        </View>
                </ScrollView>
            </View>

        )
    }
}
export default App