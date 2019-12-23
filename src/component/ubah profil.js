import React from 'react'
import {View,Text,TextInput,TouchableOpacity,Image,AsyncStorage,ScrollView} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            email:'',
            no_telp:'',
            Avatar:null
        }
    }
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled photo picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                let source = { uri: response.uri }

                this.setState({
                    ImageSource: source,
                    Avatar: response.data
                })
            }
        })
    }

    componentDidMount=()=>{
        AsyncStorage.getItem('id').then(value=>{
            if(value!=null){
                this.setState({id:value})
            }
        })
         AsyncStorage.getItem('name').then(value=>{
             if(value!=null){
                 this.setState({name:value})
             }
         })
         AsyncStorage.getItem('email').then(value=>{
             if(value!=null){
                 this.setState({email:value})
             }
         })
         AsyncStorage.getItem('no_telp').then(value=>{
             if(value!=null){
                 this.setState({no_telp:value})
             }
         })
         AsyncStorage.getItem('Avatar').then(value=>{
             if(value!=null){
                 this.setState({Avatar:value})
             }
         })   
    }
    profil=()=>{
        const{id,name,email,no_telp} = this.state;
                return fetch('https://calm-mesa-84057.herokuapp.com/user/edit', {
          method: 'PUT',

                    quality: 1.0,headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            name:name,
            email: email,
            no_telp:no_telp

          }),
        })
          .then(response => response.json())
          .then(responseJson => {
              AsyncStorage.setItem('name',this.state.name)
              AsyncStorage.setItem('email',this.state.email)
              AsyncStorage.setItem('no_telp',this.state.no_telp)
            console.log(responseJson);
            alert('sukses');
          })
          .catch(error => {
            console.error(error);
          });
        }        
        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */

        
        Updategambar=()=>{
            const { id } = this.state;
            return fetch('https://calm-mesa-84057.herokuapp.com/avatar/edit',{
                method:'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    id:id,
                     Avatar:`data:image/gif;base64,${this.state.Avatar}`
                })
            })
            .then(response=>response.json())
            .then(responseJson=>{
                AsyncStorage.setItem('Avatar',`data:image/gif;base64,${this.state.Avatar}`)
            })
            .catch(error=>{
                console.log(error)
                alert('error`')
            })
        }



  

    render(){
        let{name,email,no_telp}=this.state
        return(
            <View style={{flex:1}}>
            <ScrollView>
            <View style={{alignItems:'center',marginTop:20}}>
            <Text style={{fontSize:25}}>PROFIL</Text>
            <View style={{borderWidth:2,height:210,width:210,borderRadius:97,marginTop:10,borderColor:'#ffffff'}}>
            <TouchableOpacity 
            onPress={this.selectPhotoTapped.bind(this)}
            style={{alignItems:'center'}}>
                {/* <Image
                    source={{uri:this.state.Avatar}}
                    style={{height:'100%',width:'100%',borderRadius:100}}
                /> */}
                <Image
                    source={{uri:`data:image/gif;base64,${this.state.Avatar}`}}
                    style={{height: '100%', width: '100%', borderRadius: 100}}
                />
            </TouchableOpacity>
            </View>
            </View>
               
                <View style={{margin:20,marginTop:20}}>
                <Text style={{fontSize:20}}>name</Text>
                <TextInput
                    placeholder='Rubah'
                    onChangeText={text=>this.setState({name:text})}
                    value={this.state.name}
                />
                </View>
                <View style={{ margin: 20}}>
                    <Text style={{ fontSize: 20 }}>email</Text>
                    <TextInput
                        placeholder='Rubah'
                        onChangeText={text=>this.setState({email:text})}
                        value={this.state.email}
                    />
                </View>
                <Text style={{ fontSize: 20,marginLeft:20 }}>no_telp</Text>
                <View style={{ margin: 20,flexDirection:'row' }}>
                   <TextInput
                        placeholder='Rubah'
                        onChangeText={text=>this.setState({no_telp:text})}
                        value={this.state.no_telp}
                    />
                    <TouchableOpacity onPress={()=>this.profil(name,email,no_telp)}>
                        <Image
                            source={require('../../sdr/assets/success.png')}
                            style={{ width: 50, height: 50, marginLeft: 150 }}
                        />
                    </TouchableOpacity>
                </View>
                </ScrollView>
            
            </View>
        )
    }
}
export default App