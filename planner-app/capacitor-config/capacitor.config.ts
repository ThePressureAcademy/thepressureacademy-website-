import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pressureacademy.planner',
  appName: 'The Pressure Planner',
  webDir: 'dist',
  
  server: {
    // For development — comment out for production builds
    // url: 'http://localhost:5173',
    // cleartext: true,
    
    androidScheme: 'https',
  },
  
  android: {
    // Build configuration
    buildOptions: {
      // Ensure proper keystores are configured
      // keystorePath: 'release-key.jks',
      // keystoreAlias: 'pressure-planner',
    },
    
    // Allow mixed content for development
    allowMixedContent: false,
    
    // Splash screen and status bar
    backgroundColor: '#0A0A0A',
  },
  
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0A0A0A',
      androidSplashResourceName: 'splash',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      splashFullScreen: true,
      splashImmersive: true,
    },
    
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0A0A0A',
    },
    
    Keyboard: {
      resize: 'body',
      style: 'DARK',
    },
    
    // Local notifications for daily logging reminders
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#C45B28',
    },
  },
};

export default config;
