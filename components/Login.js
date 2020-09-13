import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Firebase from './Config';

import TextField from './TextField';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  const loginUser = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('error', error);
      })
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeader}> Login </Text>
      <TextField
        style={styles.loginTextField}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter email"
        returnKeyType="next"
      />
      <TextField
        style={styles.loginTextField}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={loginUser} style={styles.loginButton}>
        <Text style={styles.loginButtonText}> Login</Text>
      </TouchableOpacity>
      <View style={styles.navigateSignup}>
        <Text style={styles.loginDontHaveAccount}> Don't have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.loginClickHereToSignup}>
            Click here to signup.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    backgroundColor: '#6382FF',
  },
  loginHeader: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  loginTextField: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    borderRadius: 25,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: 'white',
  },
  loginButton: {
    height: 50,
    marginVertical: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  navigateSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginDontHaveAccount: {
    fontSize: 15,
    color: 'white',
  },
  loginClickHereToSignup: {
    fontSize: 15,
    color: 'white',
    fontStyle: 'italic',
  },
});

export default Login;
