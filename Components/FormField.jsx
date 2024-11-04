

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const FormField = ({ title, value, handleChangeText, secureTextEntry, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={`Enter ${title}`}
          placeholderTextColor="#999"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* <Image
              source={showPassword ? require('../Assets/eye.png') : require('../Assets/eye-hide.png')}
              style={styles.eyeIcon}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E2A78', // Title color
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
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
  eyeIcon: {
    width: 24,
    height: 24,
    margin: 10,
  },
});







