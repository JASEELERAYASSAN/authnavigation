import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import { ROUTES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'


function Login(props) {
  //  const {navigation} = props
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    if (email != '' && password != '') {
      auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log('response', res)
        Alert.alert('You can Login Now, User Created Succesfully')
      })
        .catch((error) => {
          console.log('error_++++++++', error)
          Alert.alert(error.message)
        })
    }
    else {
      Alert.alert('Both fields are mandatory')
    }
  }
  const Login = () => {
    if (email != '' && password != '') {
    auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log('response', res)
      navigation.navigate("Home")
    })
      .catch((error) => {
        console.log('error', error)
        Alert.alert(error.message)
      })
    }else {
      Alert.alert('Please enter email and password')
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/backimage/bg.png')}
          style={styles.container}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/basketlogo.png')}
              style={styles.logo} />
            <Text style={styles.brandName}>SnapBuy</Text>
          </View>
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType='email-address' />
          <TextInput style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true} />
          <View style={styles.loginBtnWrapper}>
            {/* LOGIN BUTTON */}
            <TouchableOpacity
              onPress={Login}
              // onPress={() => navigation.navigate(ROUTES.HOME)}
              activeOpacity={.7} style={styles.btn}>
              <Text style={styles.text}>LogIn</Text>
            </TouchableOpacity>
            {/* REGISTER BUTTON */}
            <TouchableOpacity
              onPress={register}
              activeOpacity={.7} style={styles.btn}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            {/* FORGOT PASSWORD BUTTON  */}
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD, { userId: 'X0001' })} >
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}> Don't have an account? </Text>
            {/* REGISTER BUTTON  */}
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.REGISTER)}
            >
              <Text style={styles.signupBtn}>Click Here</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  input: {
    width: 360,
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    opacity: .7,
    color: '#fff',
    height: 50,
    padding: 3,
    backgroundColor: '#7d5fff',
    marginLeft: 7,
    borderRadius: 5,
    paddingHorizontal: 15
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    opacity: .7,
    color: '#7d5fff',
  },
  btn: {
    width: 360,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#7d5fff',
    alignItems: 'center',
    borderColor: '#666',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  forgotPassText: {
    opacity: .7,
    color: '#7d5fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#666666',
    fontWeight: 'bold',
  },
  signupBtn: {
    opacity: .7,
    color: '#7d5fff',
    fontWeight: 'bold',
  },
})
export default Login