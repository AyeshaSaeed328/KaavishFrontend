import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E2A78', // Blue color for the Sign Up button
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