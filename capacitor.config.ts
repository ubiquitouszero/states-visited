import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.askthehuman.statesvisited',
  appName: 'States Visited',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#f7f6f2',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DEFAULT',
      backgroundColor: '#f7f6f2',
    },
  },
};

export default config;
