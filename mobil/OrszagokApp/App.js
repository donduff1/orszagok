//Decker Borisz, SzoftII/2N 2024.03.13

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA_URL = 'http://localhost:3000/orszagok'; 

const App = () => {
  const [orszagok, setOrszagok] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => setOrszagok(data.orszagok))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Név: {item.nev}</Text> 
      <Text>Terület: {item.terulet}</Text> 
      <Text>Népesség: {item.nepesseg}</Text> 
      <Text>Főváros: {item.fovaros}</Text> 
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orszagok}
        renderItem={renderItem}
        keyExtractor={item => item.nev} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey', 
    marginBottom: 10,
  },
});

export default App;
