import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App({ navigation }) {
  // const handleLoginPress = () => {
  //   navigation.navigate('Login'); // Chuyển đến trang đăng nhập khi nút được nhấn
  // };
  // const handleRegisterPress = () => {
  //   navigation.navigate('Register');
  // };
  const handleNavigation = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']} 
      style={styles.container}
    >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.style1}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.style2}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
          style={styles.style2.input}
          placeholder="Email"
        />
          <Image
            style={{ width: 32, height: 32 , marginLeft: 20 , position: 'absolute'}}
            source={require('../assets/image/avatar.png')}
          />
        </View>
      
        
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <TextInput style={styles.style2.input} placeholder="Password">
          </TextInput>
          <Image
            style={{ width: 32, height: 32 , marginLeft: 285 , position: 'absolute'}}
            source={require('../assets/image/eye_small.png')}
          />
          <Image
            style={{ width: 32, height: 32 , marginLeft: 20 , position: 'absolute'}}
            source={require('../assets/image/lock.png')}
          />

        </View>
        <TouchableOpacity style={styles.style2.btnLogin}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.style3}>
        <Text style={styles.style3.text}>Forgot your password</Text>
      </View>
    </View>
    </LinearGradient>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style1:{
    flex: 3,
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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    input: {
        height: 54,
        width: 330,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 60,
        fontSize: 18,
        fontWeight: 400,
        backgroundColor: '#F2F2F2',
        borderColor: '#F2F2F2',
      },
      btnLogin: {
        width: 330,
        height: 45,
        backgroundColor: '#060000',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      },
  },
  style3:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: 239,
    height: 27,
    text:{
        fontSize: 20,
        alignItems:'center',
        justifyContent: 'center',

    }
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
