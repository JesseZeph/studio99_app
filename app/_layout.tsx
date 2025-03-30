import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useCallback } from 'react';
import 'react-native-reanimated';
import './globals.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AnimatedSplash from '@/components/AnimatedSplash';

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    'LeagueSpartan': require('../assets/fonts/LeagueSpartan-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashAnimationComplete, setIsSplashAnimationComplete] = useState(false);

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
      throw error;
    }
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      console.log("Fonts loaded successfully");
      setIsAppReady(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      onLayoutRootView();
    }
  }, [loaded, onLayoutRootView]);

  const handleAnimationComplete = () => {
    setIsSplashAnimationComplete(true);
    setTimeout(() => {
      router.replace('/onboarding/onboard');
    }, 1000);
  };

  if (!loaded || !isAppReady) {
    return null;
  }

  if (!isSplashAnimationComplete) {
    return (
      <AnimatedSplash
        onReady={() => {
          SplashScreen.hideAsync();
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    );
  }

  return (
    <>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen name="onboarding/onboard" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  );
}

export default RootLayoutNav;
