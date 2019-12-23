import React from 'react'
import {View,Text,Image} from 'react-native'
import Route from './src/route/index'



class App extends React.Component {
  state = {
    role: true
  }

  render() {
    setTimeout(() => {
      this.setState({
        role: false
      })
    }, 3000)
    if (this.state.role) {
      return (
        <View style={{ alignItems: 'center', margin: 50, flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 34, color: '' }}>selamat datang</Text>
          <Image source={require('./sdr/assets/chat.png')} style={{ height: 300, width: 300 }} />
        </View>


      )
    }
    return(
      <Route/>
    )
  }
}
export default App
