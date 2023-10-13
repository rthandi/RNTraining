import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { Greeting } from "./app/components/Greeting";


export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 200 : 100,
  },
});
