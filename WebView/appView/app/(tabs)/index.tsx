import React, { useEffect } from "react";
import { View, StyleSheet, NativeModules } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const { NavigationBar } = NativeModules;

const App = () => {
  useEffect(() => {
    // immersive mode 해제
    if (NavigationBar && NavigationBar.show) {
      NavigationBar.show();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <WebView
          // source={{ uri: "https://youtube.com/" }}
          source={{ uri: "http://localhost:5173/" }}
          style={styles.webview}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
