import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Firebase from './Config';

import TextField from './TextField';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('created');
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <View style={styles.loginContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.loginHeader}> Register </Text>
        <TextField
          style={styles.loginTextField}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Enter name"
        />
        <TextField
          style={styles.loginTextField}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter email"
        />
        <TextField
          style={styles.loginTextField}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={signUpUser} style={styles.loginButton}>
          <Text style={styles.loginButtonText}> Create</Text>
        </TouchableOpacity>
        <View style={styles.navigateSignup}>
          <Text style={styles.loginDontHaveAccount}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.loginClickHereToSignup}>
              Click here to login.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6382FF',
    height: '100%',
  },
  scrollViewStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
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

export default SignUp;
