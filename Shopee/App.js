import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App() {
  return (
    <LinearGradient
      colors={['#00ccF9', '#00F9CC']} 
      style={styles.container}
    >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.style1}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.style2}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR business</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.content}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.style4}>
        <Button title='LOGIN' color={'#e3c000'} ></Button>
        <Button title='SIGNUP' color={'#e3c000'}></Button>
      </View>
    </View>
    </LinearGradient>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  style1:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70, // Điều này tạo thành một hình tròn bằng cách làm cho các cạnh có góc bo tròn
    backgroundColor: 'transparent', // Màu của vòng tròn
    borderColor: '#000000', // Màu của đường viền
    borderWidth: "15px",
  },  
  style2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style4:{
    flex: 2,
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
});
