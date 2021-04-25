import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavBar } from './src/NavBar';
import { AddInput } from './src/AddNum.js';
 
export default function App() {
  
  const [result, setResult] = useState(null);
 
  return (
    <View style={styles.container}>
        <NavBar title="Конвертер валют" />
        <Text style={styles.str} > Перевод рублей в доллары </Text>
        <AddInput 
              setResult={setResult.bind(this)}
         />
        <View>
              {result} 
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  str: {
    display: 'flex',
    color: 'red',
    fontSize: 15,
  },
});