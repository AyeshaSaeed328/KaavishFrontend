import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignUp = ({ navigation }) => {
  // State for form fields and submission
  const [form, setForm] = useState({
    username: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.contact || !form.password || !form.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      Alert.alert('Success', 'Signed up successfully');
      navigation.navigate('Welcome'); 
    }, 1000);
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.logo}>
        SHARE<Text style={styles.track}>TRACK</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        value={form.username}
        onChangeText={(value) => setForm({ ...form, username: value })}
      />

     
      <TextInput
        style={styles.input}
        placeholder="Contact (03xx-xxx)"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={form.contact}
        onChangeText={(value) => setForm({ ...form, contact: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={form.password}
        onChangeText={(value) => setForm({ ...form, password: value })}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
      />

     
      <TouchableOpacity style={styles.signUpButton} onPress={submit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? 'Signing Up...' : 'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

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
  input: {
    width: '80%',
    padding: 15,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#1E2A78', 
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
