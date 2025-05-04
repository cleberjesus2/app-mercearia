import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Entregamos mantimentos à sua porta</Text>
      <Text style={styles.subtitle}>
        A mercearia oferece vegetais e frutas frescas. Encomende itens frescos na mercearia.
      </Text>
      <Button
  mode="contained"
  onPress={() => navigation.navigate('HomeScreen')} // Nome correto da tela
  style={styles.button}
  labelStyle={{ fontWeight: 'bold' }}
>
  INICIAR
</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    color: '#555',
  },
  button: {
    backgroundColor: '#7785DB',
    paddingHorizontal: 30,
    borderRadius: 12,
  },
});
