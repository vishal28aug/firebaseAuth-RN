import React, { useState, useEffect } from 'react';
import Firebase from './components/Config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Loading from './components/Loading';

const Stack = createStackNavigator();

const App = () => {
  const [isIntialized, setIsIntialized] = useState(false);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setIsIntialized(true);
    });
  }, []);

  if (!isIntialized) {
    return <Loading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen
            name="LogIn"
            component={Login}
            options={{
              title: 'Log In',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'Sign Up',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
