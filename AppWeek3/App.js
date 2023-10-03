import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen.js';
import VerificationScreen from './screens/VerificationScreen.js'; 
import XMEyeScreen from './screens/XMEyeScreen.js';
import LoginWeek4Screen from './screens/LoginWeek4Screen.js';
import PasswordGenerateScreen from './screens/PasswordGenerateScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PasswordGenerate">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="XMEye" component={XMEyeScreen} />
        <Stack.Screen name="LoginWeek4" component={LoginWeek4Screen} />
        <Stack.Screen name="PasswordGenerate" component={PasswordGenerateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
