import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../models/data.js';

const ListeCategoriesScreen = ({ navigation }) => {
  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() =>
        navigation.navigate('LivresParCategorie', { categorieId: item.id })
      }
    >
      <Text style={styles.categoryTitle}>{item.genre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catégories</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#f5a442',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ListeCategoriesScreen;
