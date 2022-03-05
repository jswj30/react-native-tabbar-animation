import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>123 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end', 
    backgroundColor: '#ea3345'
  }, 
})

export default App;