import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const categorias = [
  { id: '1', nome: 'Frutas', cor: '#D4E8C0', imagem: require('../assets/img-frutas.png'), tela: 'FrutasScreen' },
  { id: '2', nome: 'Diversos', cor: '#C1D8FF', imagem: require('../assets/img-diversos.png'), tela: 'DiversosScreen' },
  { id: '3', nome: 'Açougue', cor: '#F2CACA', imagem: require('../assets/img-acougue.png'), tela: 'AcougueScreen' },
];

export default function SearchScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.locationText}>Taboão da Serra, SP</Text>
        </View>
        <Image source={require('../assets/imagem-1.png')} style={styles.avatar} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar produtos" />
        <Ionicons name="search-outline" size={22} color="#555" style={styles.searchIcon} />
      </View>

      <View style={styles.categoriasContainer}>
        {categorias.map(categoria => (
          <TouchableOpacity
            key={categoria.id}
            style={[styles.categoriaBox, { backgroundColor: categoria.cor }]}
            onPress={() => navigation.navigate(categoria.tela)}
          >
            <Image source={categoria.imagem} style={styles.categoriaImagem} />
            <Text style={styles.categoriaNome}>{categoria.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 5, fontSize: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10 },
  searchInput: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    fontSize: 14
  },
  searchIcon: { position: 'absolute', right: 10 },
  categoriasContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20 },
  categoriaBox: {
    width: '48%',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 15
  },
  categoriaImagem: { width: 50, height: 50, marginBottom: 10 },
  categoriaNome: { fontWeight: '600' }
});
