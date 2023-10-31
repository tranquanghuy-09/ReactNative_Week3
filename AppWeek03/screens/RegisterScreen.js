import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default function Login() {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };
    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <Text style={styles.style1.title}>REGISTER</Text>
            </View>
            <View style={styles.style2}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder="Password">
                    </TextInput>
                    <Image
                        style={{ width: 38, height: 25, marginLeft: 285, position: 'absolute' }}
                        source={require('../assets/image/mat.png')}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Birthday"
                />

                <View style={styles.style2.genderButtons}>

                    <TouchableOpacity
                        style={[styles.style2.genderButton, selectedGender === 'male' && styles.style2.selectedGender]}
                        onPress={() => handleGenderSelection('male')}
                    >
                        <Text style={[styles.style2.genderButtonText, { marginLeft: 100 }]}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.style2.genderButton, selectedGender === 'female' && styles.style2.selectedGender]}
                        onPress={() => handleGenderSelection('female')}
                    >
                        <Text style={[styles.style2.genderButtonText, { marginLeft: 100 }]}>Female</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.style2.btnLogin}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.style3}>
                <Text style={[styles.style3.style3_text, { marginTop: 30 }]}>When you agree to terms and conditions</Text>
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
        // borderWidth: 1,
        title: {
            fontSize: 25,
            fontWeight: 'bold',
        },
    },
    style2: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        marginTop: 30,
        genderButtons: {
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: -110,
        },
        genderButton: {
            flex: 1,
            height: 20,
            width: 20,
            borderRadius: '50%',
            borderColor: '#000000',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 80,
        },
        selectedGender: {
            backgroundColor: '#31AA52',
            borderColor: '#31AA52',
        },
        genderButtonText: {
            fontSize: 18,
        },
        btnLogin: {
            width: 330,
            height: 45,
            backgroundColor: 'red',
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
        },
    },
    style3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        style3_text: {
            fontSize: 14,
            fontWeight: 400,
            marginTop: 15,
        }
    },
    style4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -20,
        btn: {
            borderColor: '#0680F1',
            borderWidth: 1,
            borderRadius: 2,
            width: 110,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
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
