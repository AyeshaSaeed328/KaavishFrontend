

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';

const Login = ({ navigation }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const submit = async () => {
    if (form.username === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setSubmitting(true);

    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        SHARE<Text style={styles.track}>TRACK</Text>
      </Text>

      {/* Profile Icon */}
      <Image source={require('../Assets/profile.jpg')} style={styles.profileImage} />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        value={form.username}
        onChangeText={(value) => setForm({ ...form, username: value })}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={form.password}
        onChangeText={(value) => setForm({ ...form, password: value })}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={submit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? 'Signing In...' : 'Sign In'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E2A78', // Blue color for "SHARE"
  },
  track: {
    color: '#E63946', // Red color for "TRACK"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#1E2A78',
    marginVertical: 10,
  },
  signInButton: {
    backgroundColor: '#1E2A78', // Blue color for the Sign In button
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
