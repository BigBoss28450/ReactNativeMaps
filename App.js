import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={Platform.OS !== "ios" && PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
