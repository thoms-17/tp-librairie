import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { LIVRES } from '../models/data.js';

const LivresParCategorieScreen = ({ route }) => {
  const { categorieId } = route.params;

  const livresCategorie = LIVRES.filter((livre) => livre.categorieId.includes(categorieId));

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
    <FlatList
      data={livresCategorie}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  livreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
});

export default LivresParCategorieScreen;
