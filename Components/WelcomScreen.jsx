
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import React from 'react';

const WelcomScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.logo}>
        SHARE<Text style={styles.track}>TRACK</Text>
      </Text>

     
      <Text style={styles.welcomeText}>Welcome</Text>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Login')}
        >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
        >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E2A78', 
  },
  track: {
    color: '#E63946', 
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Cursive', 
    marginVertical: 20,
  },
  signInButton: {
    backgroundColor: '#E63946', 
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#1E2A78', 
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


