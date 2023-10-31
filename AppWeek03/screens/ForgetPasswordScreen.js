import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ForgetPassword() {
    const navigation = useNavigation();
    const handleNavigation = (pageName) => {
      navigation.navigate(pageName);
    };
    return (
        <LinearGradient
            colors={['#00ccF9', '#00F9CC']}
            style={styles.container}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.style1}>
                    <Image style={[{ width: 105, height: 117 }]} source={require('../assets/image/forgetpwd.png')}></Image>
                </View>
                <View style={styles.style2}>
                    <Text style={styles.style2.title}>FORGET</Text>
                    <Text style={styles.style2.title}>Password</Text>
                </View>
                <View style={styles.style3}>
                    <Text style={styles.content}>Provide your account’s email for which you want to reset your password</Text>
                </View>
                <View style={[styles.style4, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Image
                        style={{ width: 46, height: 43, marginLeft: -255, position: 'absolute' }}
                        source={require('../assets/image/mail.png')}
                    />
                    <TextInput style={styles.style4.input} placeholder="Email">
                    </TextInput>

                </View>
                <View style={styles.style5}>
                    <TouchableOpacity style={styles.style5.button} onPress={() => handleNavigation('Verification')}>
                        <Text style={styles.style5.buttonText}>NEXT</Text>
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
    style1: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    style2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    },
    style3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    style4: {
        alignItems: 'center',
        justifyContent: 'center',
        input: {
            height: 47,
            width: 305,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 18,
            fontWeight: 400,
            backgroundColor: '#C4C4C4',
            borderColor: '#F2F2F2',
            paddingLeft: 65,
        },
    },
    style5: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: -30,
        button: {
            width: 305,
            height: 45,
            backgroundColor: '#e3c000',
            alignItems: 'center',
            justifyContent: 'center',

        },
        buttonText: {
            fontSize: 18,
            fontWeight: 'bold',
            backgroundColor: '#E3C000',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    content: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 29,
        marginRight: 29,
    },


});
