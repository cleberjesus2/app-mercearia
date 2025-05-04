import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const compras = [
  { id: '1', nome: 'Frutas', data: '27/05/2024', valor: '50,00', itens: 5, imagem: require('../assets/img-frutas.png'), cor: '#D4E8C0' },
  { id: '2', nome: 'Diversos', data: '20/05/2024', valor: '35,40', itens: 6, imagem: require('../assets/img-diversos.png'), cor: '#C1D8FF' },
  { id: '3', nome: 'Açougue', data: '20/05/2024', valor: '56,44', itens: 3, imagem: require('../assets/img-acougue.png'), cor: '#F2CACA' }
];

export default function ListaComprasScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.locationText}>Taboão da Serra, SP</Text>
        </View>
        <Image source={require('../assets/imagem-1.png')} style={styles.avatar} />
      </View>

      <Text style={styles.title}>Minhas Compras</Text>

      <FlatList
        data={compras}
        keyExtractor={item => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={[styles.imageCircle, { backgroundColor: item.cor }]}>
              <Image source={item.imagem} style={styles.itemImage} />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemData}>{item.data}</Text>
            </View>
            <View style={styles.itemResumo}>
              <Text style={styles.itemValor}>$ {item.valor}</Text>
              <Text style={styles.itemItens}>{item.itens} itens</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 5, fontSize: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  title: { fontSize: 20, fontWeight: '700', marginVertical: 20 },
  list: { marginTop: 10 },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  imageCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  itemImage: { width: 40, height: 40 },
  itemInfo: { flex: 1 },
  itemNome: { fontWeight: '600', fontSize: 16 },
  itemData: { color: '#888', fontSize: 12 },
  itemResumo: { alignItems: 'flex-end' },
  itemValor: { fontWeight: '700', fontSize: 16 },
  itemItens: { fontSize: 12, color: '#888' }
});
