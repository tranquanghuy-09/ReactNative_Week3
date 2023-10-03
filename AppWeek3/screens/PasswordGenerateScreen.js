import { StatusBar } from 'expo-status-bar'; 
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App({ }) {
    return (
        <LinearGradient
          colors={['#3B3B98', '#C4C4C4']} 
          style={styles.container}
        >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.stylemain}>
            <View style={styles.style1}>
                <Text style={styles.style1.title}>Password Generator</Text>
            </View>
            <View style={styles.style2}>
                <TextInput style={styles.style2.textinput}></TextInput>
            </View>
            <View style={styles.style3}>
                <View style={[styles.style3, {flexDirection:'row'}]}>
                    <Text style={styles.style3.text}>Password length</Text>
                </View>
                <View style={[styles.style3, {flexDirection:'row'}]}>
                    <Text style={styles.style3.text}>Include lower case letters</Text>
                </View>
                <View style={[styles.style3, {flexDirection:'row'}]}>
                    <Text style={styles.style3.text}>Include upcase letters</Text>
                </View>
                <View style={[styles.style3, {flexDirection:'row'}]}>
                    <Text style={styles.style3.text}>Include number</Text>
                </View>
                <View style={[styles.style3, {flexDirection:'row'}]}>
                    <Text style={styles.style3.text}>Include special symbol</Text>
                </View>
            </View>
          </View>
          {/* <View style={styles.style2}>
            <Text style={styles.title}>GROW</Text>
            <Text style={styles.title}>YOUR business</Text>
          </View>
          <View style={styles.style3}>
            <Text style={styles.content}>We will help you to grow your business using online server</Text>
          </View>
          <View style={styles.style4}>
            <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Login')}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Register')}>
              <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        </LinearGradient>
      ); 
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      stylemain:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#23235B',
        borderRadius: 15,
      },
      style1:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',   
            width: 181,
            height: 64, 
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }
      },  
      style2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textinput:{
            width: 297,
            height: 55,
            backgroundColor: '#151537',
        }
      },
      style3:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        text:{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        }
      },
      style4:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      content: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 29,
        marginRight: 29,
      },
      button: {
        width: '100px',
        height: '40px',
        backgroundColor: '#e3c000',
        borderRadius: 5,
        alignItems: 'center', 
        justifyContent: 'center', 
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor : '#E3C000',
        textAlign: 'center',
      },
    });
    