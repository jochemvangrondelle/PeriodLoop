import { NativeBaseProvider, StatusBar } from '@gluestack-ui/themed-native-base';
import HomeScreen from './screens/HomeScreen';
import theme from './styles/theme';
import React, { useEffect, useMemo } from 'react';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { DefaultTheme, Font, LightTheme, DarkTheme } from './themes';
import { enableScreens } from 'react-native-screens';
import { useColorScheme } from 'react-native';
import { useDidMountEffect } from './services/utils';
import * as SplashScreen from 'expo-splash-screen';

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({
    [Font.GilroyBold]: require('~assets/fonts/Gilroy-Bold.ttf'),
    [Font.GilroyExtraBold]: require('~assets/fonts/Gilroy-ExtraBold.ttf'),
    [Font.GilroyLight]: require('~assets/fonts/Gilroy-Light.ttf'),
    [Font.GilroyMedium]: require('~assets/fonts/Gilroy-Medium.ttf'),
    [Font.GilroyRegular]: require('~assets/fonts/Gilroy-Regular.ttf'),
    [Font.GilroySemiBold]: require('~assets/fonts/Gilroy-SemiBold.ttf'),
  });

  const colorScheme = useColorScheme();
  const theme = useMemo(() => {
    if (!colorScheme) return DefaultTheme;
    return colorScheme === 'dark' ? DarkTheme : LightTheme;
  }, [colorScheme]);

  useEffect(() => {
    // Wait for the assets to load before hiding the SplashScreen
    SplashScreen.preventAutoHideAsync();
  }, []);

  useDidMountEffect(() => {
    if (fontsLoaded) setTimeout(SplashScreen.hideAsync, 100);
  }, [fontsLoaded]);

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
