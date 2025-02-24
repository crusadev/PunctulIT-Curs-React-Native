import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import Button from "./components/button/index.js"
import Form from './components/form/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Punctul IT</Text>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <TextInput />
      <Button display={"Send"} display2={"Message"}/>
      <Button display={"Buy"} display2={"Item"}/>
      <Form />
      {/*<Image source={require("./assets/icon.png")}/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
