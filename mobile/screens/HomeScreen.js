import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 1, title: 'PAPELARIA', icon: 'document-outline' },
    { id: 2, title: 'INFORMÁTICA', icon: 'desktop-outline' },
    { id: 3, title: 'EPI / PAE', icon: 'shield-outline' },
    { id: 4, title: 'RELATÓRIO', icon: 'document-text-outline' },
  ];

  const handleNavigate = (title) => {
    switch (title) {
      case 'PAPELARIA':
        navigation.navigate('PapelariaScreen');
        break;
      case 'INFORMÁTICA':
        navigation.navigate('InformaticaScreen');
        break;
      case 'EPI / PAE':
        navigation.navigate('EpiPaeScreen');
        break;
      case 'RELATÓRIO':
        navigation.navigate('RelatorioScreen');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get('http://192.168.0.10/api/get_mobiles.php') 
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Estoque</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar item ou setor..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
          <Ionicons name="search" size={20} color="#999" />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.card}
            onPress={() => handleNavigate(cat.title)}
          >
            <Ionicons name={cat.icon} size={40} color="#fff" />
            <Text style={styles.cardTitle}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 30, },
  header: { padding: 20, paddingTop: 40 },
  headerTitle: { fontSize: 30, color: '#fff', fontWeight: 'bold' },
  searchContainer: { paddingHorizontal: 20 },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  searchInput: { flex: 1, color: '#fff', fontSize: 16 },
  categoriesContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '48%',
    height:'50%',
    backgroundColor: '#6366f1',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
