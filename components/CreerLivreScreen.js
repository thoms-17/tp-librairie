import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { LIVRES } from '../models/data.js';

const CreerLivreScreen = ({ navigation }) => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const ajouterLivre = () => {
    const nouveauLivre = {
      id: LIVRES.length + 1, // Générer un nouvel ID unique pour le livre
      titre,
      description,
    };

    // Ajouter le nouveau livre à la constante LIVRES
    LIVRES.push(nouveauLivre);
    console.log(nouveauLivre);

    // Rediriger vers la liste des livres
    navigation.navigate('Livres');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titre du livre"
        value={titre}
        onChangeText={setTitre}
      />
      <TextInput
        style={styles.input}
        placeholder="Description du livre"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Ajouter le livre" onPress={ajouterLivre} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CreerLivreScreen;
