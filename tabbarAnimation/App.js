import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TestSvg from './assets/img/testsvg.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>123 </Text>
      <View style={{
        borderWidth: 2, 
        width: 100, 
        height: 100, 
      }}>
        <TestSvg 
          width={'100%'}
          height={'100%'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end', 
    backgroundColor: '#ea3345', 
  }, 
})

export default App;