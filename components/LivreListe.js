import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import { LIVRES, CATEGORIES } from "../models/data.js";

const LivreListe = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLivres = LIVRES.filter((livre) =>
    livre.titre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ajouterLivre = () => {
    navigation.navigate('CreerLivre');
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
        <FlatList
          data={CATEGORIES}
          horizontal
          renderItem={({ item }) => (
            <Text
              style={styles.category}
              onPress={() =>
                navigation.navigate("LivresParCategorie", {
                  categorieId: item.id,
                })
              }
            >
              {item.genre}
            </Text>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button title="Ajouter un livre" onPress={ajouterLivre} />
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
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  category: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#f5a442",
    marginHorizontal: 8,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  livreContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
    fontWeight: "bold",
    marginBottom: 8,
  },
  livreDescription: {
    fontSize: 14,
    color: "#888",
  },
});

export default LivreListe;
