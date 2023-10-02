import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App({ navigation }) {
  const handleLoginPress = () => {
    navigation.navigate('Login'); // Chuyển đến trang đăng nhập khi nút được nhấn
  };
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
        {/* <Button title='LOGIN' color={'#e3c000'}></Button>
        <Button title='SIGNUP' color={'#e3c000'}></Button> */}
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
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
    marginTop: 80,
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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
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
