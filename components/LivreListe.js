import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { LIVRES, CATEGORIES } from "../models/data.js";

const LivreListe = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLivres = LIVRES.filter((livre) =>
    livre.titre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ajouterLivre = () => {
    navigation.navigate("CreerLivre");
  };

  const handleNaviguerCategories = () => {
    navigation.navigate("Catégories");
  };

  const renderItem = ({ item }) => (
    <View style={styles.livreContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.livreImage} />
      <View style={styles.livreInfo}>
        <Text style={styles.livreTitre}>{item.titre}</Text>
        <Text style={styles.livreDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un livre par titre..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleNaviguerCategories}
        >
          <Text style={styles.buttonText}>Catégorie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ajouterLivre}>
          <Text style={styles.buttonText}>Ajouter un livre</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredLivres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  livreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  livreImage: {
    width: 80,
    height: 120,
    marginRight: 16,
  },
  livreInfo: {
    flex: 1,
  },
  livreTitre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  livreDescription: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#f5a442',
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default LivreListe;
