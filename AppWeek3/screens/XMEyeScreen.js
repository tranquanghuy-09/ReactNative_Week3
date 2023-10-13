import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image
          style={{ width: 112.19, height: 107.2 }}
          source={require('../assets/image/XMEye.png')}
        />
      </View>
      <View style={styles.style2}>
        <View style={styles.style2.inputGroup}>
          {/* <Image
            source={require('../assets/image/username.svg')}
            style={styles.style2.imageStyle}
          /> */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 15 }}>
            <path d="M23.2931 8.20312C23.2931 12.4123 19.5118 15.9062 14.7414 15.9062C9.97092 15.9062 6.18964 12.4123 6.18964 8.20312C6.18964 3.99398 9.97092 0.5 14.7414 0.5C19.5118 0.5 23.2931 3.99398 23.2931 8.20312Z" stroke="#386FFC" />
            <mask id="path-2-inside-1_134_29" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30 30C30 22.4924 23.2843 16.4062 15 16.4062C6.71573 16.4062 0 22.4924 0 30H30Z" />
            </mask>
            <path d="M30 30V31H31V30H30ZM0 30H-1V31H0V30ZM15 17.4062C22.8269 17.4062 29 23.135 29 30H31C31 21.8497 23.7417 15.4062 15 15.4062V17.4062ZM1 30C1 23.135 7.17311 17.4062 15 17.4062V15.4062C6.25834 15.4062 -1 21.8497 -1 30H1ZM0 31H30V29H0V31Z" fill="#386FFC" mask="url(#path-2-inside-1_134_29)" />
          </svg>
          <TextInput
            style={styles.style2.input}
            placeholder="Please input user name"
          />
        </View>
        <View style={styles.style2.inputGroup}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 15 }}>
            <rect x="13.7383" y="16.9445" width="2.80374" height="6.94444" fill="#386FFC" />
            <rect x="0.5" y="11.6111" width="29" height="17.8889" stroke="#386FFC" />
            <mask id="path-3-inside-1_134_34" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3551 11.1111H26.3551C26.3551 4.97461 21.334 0 15.1402 0C8.94634 0 3.92523 4.97461 3.92523 11.1111H4.92523C4.92523 5.53565 9.48983 1 15.1402 1C20.7905 1 25.3551 5.53565 25.3551 11.1111Z" />
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3551 11.1111H26.3551C26.3551 4.97461 21.334 0 15.1402 0C8.94634 0 3.92523 4.97461 3.92523 11.1111H4.92523C4.92523 5.53565 9.48983 1 15.1402 1C20.7905 1 25.3551 5.53565 25.3551 11.1111Z" fill="#386FFC" />
            <path d="M25.3551 11.1111H24.3551V12.1111H25.3551V11.1111ZM26.3551 11.1111V12.1111H27.3551V11.1111H26.3551ZM3.92523 11.1111H2.92523V12.1111H3.92523V11.1111ZM4.92523 11.1111V12.1111H5.92523V11.1111H4.92523ZM25.3551 12.1111H26.3551V10.1111H25.3551V12.1111ZM27.3551 11.1111C27.3551 4.41358 21.8775 -1 15.1402 -1V1C20.7905 1 25.3551 5.53565 25.3551 11.1111H27.3551ZM15.1402 -1C8.40284 -1 2.92523 4.41358 2.92523 11.1111H4.92523C4.92523 5.53565 9.48983 1 15.1402 1V-1ZM3.92523 12.1111H4.92523V10.1111H3.92523V12.1111ZM15.1402 0C8.94608 0 3.92523 4.97487 3.92523 11.1111H5.92523C5.92523 6.09642 10.0336 2 15.1402 2V0ZM26.3551 11.1111C26.3551 4.97487 21.3343 0 15.1402 0V2C20.2468 2 24.3551 6.09642 24.3551 11.1111H26.3551Z" fill="#386FFC" mask="url(#path-3-inside-1_134_34)" />
          </svg>
          <TextInput style={styles.style2.input} placeholder="Please input password">
          </TextInput>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ fontSize: 18, color: 'white'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.style3}>
        <View style={styles.style3.comp1}>
          <Text style={styles.style3.comp1.text}>Register</Text>
          <Text style={styles.style3.comp1.text}>Forgot password</Text>
        </View>
        <View style={styles.style3.comp2}>
          <Text style={styles.style3.comp2.text}>---------</Text>
          <Text style={styles.style3.comp2.text}>Other Login Methods</Text>
          <Text style={styles.style3.comp2.text}>---------</Text>
        </View>
      </View>
      <View style={styles.style4}>
        <TouchableOpacity>
          <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="74" height="74" rx="10" fill="#3AB4FF" />
            <circle cx="37.3163" cy="27.1966" r="11.3846" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.288 58.1881C56.2897 58.0829 56.2905 57.9775 56.2905 57.8718C56.2905 47.2179 47.6538 38.5812 36.9999 38.5812C26.346 38.5812 17.7093 47.2179 17.7093 57.8718C17.7093 57.9775 17.7102 58.0829 17.7119 58.1881H56.288Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5151 6.32477H55.861V13.4849L48.7008 13.4849L48.7008 18.139H55.861V25.2991H60.5151V18.139H67.6752V13.4849L60.5151 13.4849V6.32477Z" fill="white" />
          </svg>

        </TouchableOpacity>
        <TouchableOpacity>
          <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="74" height="74" rx="10" fill="#F4AA47" />
            <path d="M50.1783 44.2265C46.665 40.7442 42.0763 38.6364 37.0501 38.6364C32.0238 38.6364 27.4352 40.7442 23.9156 44.2336C23.8184 44.3335 23.7589 44.4723 23.7495 44.621C23.7402 44.7696 23.7818 44.9167 23.8655 45.0312L26.1161 48.0862C26.2974 48.3283 26.6162 48.3568 26.8288 48.1503C29.5545 45.4158 33.1304 43.7636 37.0501 43.7636C40.9698 43.7636 44.5457 45.4158 47.2714 48.1432C47.4839 48.3497 47.8028 48.3212 47.9841 48.0791L50.2346 45.0241C50.4097 44.7891 50.3846 44.433 50.1783 44.2265ZM57.5177 34.2497C51.9725 28.9871 44.8395 25.8182 37.0501 25.8182C29.2606 25.8182 22.1276 28.9871 16.5762 34.2497C16.4747 34.3473 16.4111 34.4866 16.3994 34.6374C16.3877 34.7881 16.4288 34.938 16.5137 35.0544L18.7643 38.1094C18.9393 38.3515 19.2581 38.38 19.4644 38.1806C24.2344 33.6658 30.3672 30.9455 37.0501 30.9455C43.733 30.9455 49.8658 33.6658 54.6295 38.1806C54.842 38.38 55.1546 38.3515 55.3296 38.1094L57.5802 35.0544C57.7552 34.8123 57.7302 34.4491 57.5177 34.2497V34.2497ZM64.8132 24.3512C57.2239 17.2585 47.5089 13 36.925 13C26.4099 13 16.7575 17.2015 9.18689 24.2088C9.13488 24.2564 9.09175 24.3154 9.06005 24.3822C9.02835 24.4491 9.00872 24.5225 9.00231 24.5982C8.9959 24.6738 9.00285 24.7502 9.02274 24.8227C9.04263 24.8953 9.07506 24.9626 9.11812 25.0206L11.3687 28.0756C11.5437 28.3106 11.8563 28.3462 12.0626 28.1539C18.858 21.8802 27.504 18.1273 36.925 18.1273C46.4149 18.1273 55.1171 21.9371 61.9313 28.2892C62.1438 28.4886 62.4564 28.453 62.6315 28.2109L64.882 25.1559C65.0633 24.9138 65.032 24.5506 64.8132 24.3512ZM32.9866 55.4424C32.9866 56.6512 33.4081 57.8104 34.1584 58.6651C34.9088 59.5198 35.9264 60 36.9876 60C38.0487 60 39.0664 59.5198 39.8167 58.6651C40.567 57.8104 40.9886 56.6512 40.9886 55.4424C40.9886 54.2337 40.567 53.0744 39.8167 52.2197C39.0664 51.365 38.0487 50.8848 36.9876 50.8848C35.9264 50.8848 34.9088 51.365 34.1584 52.2197C33.4081 53.0744 32.9866 54.2337 32.9866 55.4424Z" fill="white" />
          </svg>

        </TouchableOpacity>
        <TouchableOpacity >
          <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="74" height="74" rx="10" fill="#3A579C" />
            <g clip-path="url(#clip0_138_61)">
              <path d="M29.1689 59V37.8847H21V30.2822H29.1689V23.7886C29.1689 18.6859 33.9942 14 45.1129 14C49.6147 14 52.9436 14.295 52.9436 14.295L52.6813 21.3944C52.6813 21.3944 49.2864 21.3719 45.5817 21.3719C41.5721 21.3719 40.9297 22.6348 40.9297 24.7309V30.2822H53L52.4748 37.8847H40.9297V59H29.1689Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_138_61">
                <rect width="32" height="45" fill="white" transform="translate(21 14)" />
              </clipPath>
            </defs>
          </svg>

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
    backgroundColor: '#FFFFFF',
  },
  style1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    inputGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#C4C4C4',
      height: 54,
      width: 300,
      borderRadius: 5,
      margin: 12,
    },
    input: {
      height: 54,
      width: 330,
      margin: 12,
      padding: 10,
      fontSize: 18,
      fontWeight: 400,
      color: '#C4C4C4',
    },
  },
  style3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20,
    comp1: {
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      text: {
        fontSize: 18,
      }
    },
    comp2: {
      width: 300,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      text: {
        fontSize: 18,
      }
    },
  },
  style4: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnLogin: {
    width: 300,
    height: 48,
    backgroundColor: '#386FFC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
