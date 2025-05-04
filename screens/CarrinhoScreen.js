import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const carrinho = [
  { id: '1', nome: 'Frutas', valor: '50,00', itens: 5, imagem: require('../assets/img-frutas.png'), cor: '#D4E8C0' },
  { id: '2', nome: 'Diversos', valor: '35,40', itens: 6, imagem: require('../assets/img-diversos.png'), cor: '#C1D8FF' },
  { id: '3', nome: 'Açougue', valor: '56,44', itens: 3, imagem: require('../assets/img-acougue.png'), cor: '#F2CACA' }
];

export default function CarrinhoScreen({ navigation }) {
  const total = carrinho.reduce((soma, item) => soma + parseFloat(item.valor.replace(',', '.')), 0).toFixed(2).replace('.', ',');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={26} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Meu carrinho</Text>

      <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={[styles.imageCircle, { backgroundColor: item.cor }]}>
              <Image source={item.imagem} style={styles.itemImage} />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemDetalhes}>$ {item.valor}  •  {item.itens} itens</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.editar}>✏️ Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total a pagar</Text>
          <Text style={styles.totalValue}>$ {total}</Text>
        </View>
        <TouchableOpacity style={styles.botaoPagar}>
          <Text style={styles.botaoTexto}>Pagar agora</Text>
          <Ionicons name="chevron-forward" size={18} color="#6C63FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  backButton: { marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  list: { flex: 1 },
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
  itemDetalhes: { fontSize: 12, color: '#555' },
  editar: { fontSize: 13, color: '#6C63FF' },
  footer: {
    backgroundColor: '#C1D8FF',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalLabel: { color: '#fff', fontSize: 14 },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  botaoPagar: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  botaoTexto: { color: '#6C63FF', fontWeight: '600', marginRight: 5 }
});
