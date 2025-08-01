import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Alert,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const EpiPaeScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSolicitar = (itemName) => {
    Alert.alert("✅ Sucesso!", `${itemName} resgatado com sucesso!`, [
      { text: "OK", style: "default" },
    ]);
  };

  const epiPaeItems = [
    { id: "1", name: "Folha", category: "Folha", image: require("../assets/folha.png"), inStock: true },
    { id: "2", name: "Caneta", category: "Caneta", image: require("../assets/caneta.png"), inStock: true },
    { id: "3", name: "Borracha", category: "Borracha", image: require("../assets/borracha.png"), inStock: true },
    { id: "4", name: "Marca Texto", category: "Marca Texto", image: require("../assets/marcatexto.png"), inStock: true },
    { id: "5", name: "Lápis", category: "Lápis", image: require("../assets/lapis.png"), inStock: true },
    { id: "6", name: "Elástico", category: "Elástico", image: require("../assets/elastico.png"), inStock: true },
    { id: "7", name: "Capacete", category: "Capacете", image: require("../assets/grampeador.png"), inStock: true },
    { id: "8", name: "Luvas", category: "Luvas", image: require("../assets/postit.png"), inStock: true },
    { id: "9", name: "Óculos", category: "Óculos", image: require("../assets/marcador.png"), inStock: true },
    { id: "10", name: "Colete", category: "Colete", image: require("../assets/marcador.png"), inStock: true },
    { id: "11", name: "Botina", category: "Botina", image: require("../assets/marcador.png"), inStock: true },
    { id: "12", name: "Máscara", category: "Máscara", image: require("../assets/marcador.png"), inStock: true },
    { id: "13", name: "Protetor Auricular", category: "Protetor Auricular", image: require("../assets/marcador.png"), inStock: true },
    { id: "14", name: "Cinto", category: "Cinto", image: require("../assets/marcador.png"), inStock: true },
    { id: "15", name: "Extintor", category: "Extintor", image: require("../assets/marcador.png"), inStock: true },
  ];

  const filteredItems = epiPaeItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemCard}>
      <View style={styles.itemImageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => handleSolicitar(item.name)}
      >
        <Text style={styles.selectButtonText}>SOLICITAR</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar item ou setor..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.itemsList}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchContainer: {
    margin: 15,
    position: "relative",
  },
  searchInput: {
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333",
    color: "#fff",
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: 14,
  },
  itemsList: {
    padding: 10,
  },
  row: {
    justifyContent: "space-around",
  },
  itemCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 15,
    margin: 5,
    alignItems: "center",
    width: "30%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemImageContainer: {
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: "contain",
  },
  itemName: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
  selectButton: {
    backgroundColor: "#6E6EFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default EpiPaeScreen;