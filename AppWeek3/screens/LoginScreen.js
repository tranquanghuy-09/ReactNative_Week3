import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.style2}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <TextInput style={styles.input} placeholder="Password">
          </TextInput>
          <Image
            style={{ width: 38, height: 25 , marginLeft: 285 , position: 'absolute'}}
            source={require('../assets/image/mat.png')}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.style3}>
        <Text style={[styles.style3.style3_text,{marginTop:-20}]}>When you agree to terms and conditions</Text>
        <TouchableOpacity>
          <Text style={[styles.style3.style3_text, {color: '#5D25FA'}]}>For got your password</Text>
        </TouchableOpacity>
        <Text style={styles.style3.style3_text}>Or login with</Text>
      </View>
      <View style={styles.style4}>
        <TouchableOpacity style={[styles.style4.btn, {backgroundColor: '#25479B'}]}>
          <Image style={[styles.style4.image, {marginLeft: -15}]} source={require('../assets/image/icofacebook.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.style4.btn, {backgroundColor: '#0F8EE0'}]}>
          <Image style={[styles.style4.image, {width:25, height:25}]} source={require('../assets/image/icozalo.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.style4.btn, {backgroundColor: '#FFFFFF'}]}>
          <Image style={[styles.style4.image]} source={require('../assets/image/icogoogle.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31AA5230',
  },
  style1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  style2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    style3_text:{
      fontSize: 14,
      fontWeight: 400,
      marginTop:15,
    }
  },
  style4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -20,
    btn:{
      borderColor: '#0680F1',
      borderWidth: 1,
      borderRadius: 2,
      width: 110,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: 30,
      height: 30,
    }
  },
  input: {
    height: 54,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C44D',
    borderColor: '#F2F2F2',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnLogin: {
    width: 330,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#e3c000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
