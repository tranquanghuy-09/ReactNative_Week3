import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ navigation }) {
    return (
        <LinearGradient
            colors={['#00ccF9', '#00F9CC']}
            style={styles.container}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.style1}>
                   <Text style={styles.style1.title}>CODE</Text>
                </View>
                <View style={styles.style2}>
                    <Text style={styles.style2.title}>VERIFICATION</Text>
                </View>
                <View style={styles.style3}>
                    <Text style={styles.content}>Enter ontime password sent on
                    ++849092605798</Text>
                </View>
                <View style={[styles.style4, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput style={styles.style4.input}>
                    </TextInput>
                    <TextInput style={styles.style4.input}>
                    </TextInput>
                    <TextInput style={styles.style4.input}>
                    </TextInput>
                    <TextInput style={styles.style4.input}>
                    </TextInput>
                    <TextInput style={styles.style4.input}>
                    </TextInput>
                    <TextInput style={styles.style4.input}>
                    </TextInput>

                </View>
                <View style={styles.style5}>
                    <TouchableOpacity style={styles.style5.button}>
                        <Text style={styles.style5.buttonText}>VERIFY CODE</Text>
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
        marginTop: 50,
        title: {
            fontSize: 60,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        }
    },
    style2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    },
    style3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
    },
    style4: {
        alignItems: 'center',
        justifyContent: 'center',
        input: {
            height: 50,
            width: 50,
            borderWidth: 1,
            padding: 10,
            fontSize: 18,
            fontWeight: 400,
            borderColor: '#000000',
        },
    },
    style5: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: -30,
        button: {
            width: 339,
            height: 50,
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
