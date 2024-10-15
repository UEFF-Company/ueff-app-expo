import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Get your Lips fixed!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Get a sightseeing in Berlin</ThemedText>
        <ThemedText>
          Your tour guide <ThemedText type="defaultSemiBold">Sebastian</ThemedText> will show you Berlin.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Fly</ThemedText>
        <ThemedText>
          Fly to Turkey to the beautiful town of Adıyaman.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: New lips</ThemedText>
        <ThemedText>
          Get your operation. Once your ready your new lips will{' '}
          <ThemedText type="defaultSemiBold">help tourists</ThemedText> to float on the ocean,{' '}
          <ThemedText type="defaultSemiBold">collect more food</ThemedText> with your new mouth pockets and{' '}
          <ThemedText type="defaultSemiBold">have a better life</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 101,
    width: 310,
    bottom: 50,
    left: 25,
    position: 'absolute',
  },
});
