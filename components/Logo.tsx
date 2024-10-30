import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('@/assets/images/logo.png')}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default Logo;
