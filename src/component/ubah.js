import React from 'react'
import{View,Text,TextInput,TouchableOpacity} from 'react-native'


class App extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#000080'}}>
            <View style={{marginTop:200,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25,color:'#32cd32'}}>Rubah pengaturan keamanan</Text>
            </View>
            <View style={{marginTop:90}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ubahpassword')}>
                <View style={{borderWidth:2,height:100,width:'100%',justifyContent:'center',borderColor:'#000080'}}>
                    <Text style={{fontSize:20,color:'#ffffff',margin:10}}>Rubah password?</Text>
                </View>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ubahprofil')}>
                        <View style={{ borderWidth: 2, height: 100, width: '100%', justifyContent: 'center', borderColor: '#000080' }}>
                            <Text style={{ fontSize: 20, color: '#ffffff',margin:10 }}>Rubah profil?</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        )
    }
}
export default App