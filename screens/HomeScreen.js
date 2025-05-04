import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const categorias = [
  { id: '1', nome: 'Frutas', cor: '#D4E8C0', imagem: require('../assets/img-frutas.png'), tela: 'FrutasScreen' },
  { id: '2', nome: 'Diversos', cor: '#C1D8FF', imagem: require('../assets/img-diversos.png'), tela: 'DiversosScreen' },
  { id: '3', nome: 'Açougue', cor: '#F2CACA', imagem: require('../assets/img-acougue.png'), tela: 'AcougueScreen' }
];

const compras = [
  { id: '1', nome: 'Frutas', data: '27/05/2024', valor: '50,00', itens: 5, imagem: require('../assets/img-frutas.png') },
  { id: '2', nome: 'Diversos', data: '20/05/2024', valor: '35,40', itens: 6, imagem: require('../assets/img-diversos.png') },
  { id: '3', nome: 'Açougue', data: '20/05/2024', valor: '56,44', itens: 3, imagem: require('../assets/img-acougue.png') }
];

export default function HomeScreen() {
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

      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListaComprasScreen')}>
          <Ionicons name="list-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CarrinhoScreen')}>
          <Ionicons name="cart-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcome}>Seja bem-vindo,</Text>
      <Text style={styles.title}>Vamos pedir itens fresquinhos para você?</Text>

      <Text style={styles.section}>Categorias</Text>
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

      <Text style={styles.section}>Minhas Compras</Text>
      <FlatList
        data={compras}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.compraItem}>
            <Image source={item.imagem} style={styles.compraImagem} />
            <View>
              <Text style={styles.compraNome}>{item.nome}</Text>
              <Text style={styles.compraData}>{item.data}</Text>
            </View>
            <View style={styles.compraResumo}>
              <Text style={styles.compraValor}>$ {item.valor}</Text>
              <Text style={styles.compraItens}>{item.itens} itens</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 5, fontSize: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  menuContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15 },
  welcome: { marginTop: 10, color: '#999' },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  section: { fontSize: 16, fontWeight: '600', marginTop: 20 },
  categoriasContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  categoriaBox: { width: '30%', alignItems: 'center', paddingVertical: 12, borderRadius: 12 },
  categoriaImagem: { width: 50, height: 50, marginBottom: 8 },
  categoriaNome: { fontWeight: '600' },
  compraItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  compraImagem: { width: 50, height: 50, marginRight: 10 },
  compraNome: { fontWeight: '600' },
  compraData: { fontSize: 12, color: '#999' },
  compraResumo: { marginLeft: 'auto', alignItems: 'flex-end' },
  compraValor: { fontWeight: 'bold' },
  compraItens: { fontSize: 12 }
});


