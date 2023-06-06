import React, { useState } from "react";
import {
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { LIVRES, CATEGORIES } from "../models/data.js";

const CreerLivreScreen = ({ navigation }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorieId, setCategorieId] = useState("");

  const [livres, setLivres] = useState(LIVRES);

  const ajouterLivre = () => {
    const nouveauLivre = {
      id: uuidv4(),
      titre,
      description,
      categorieId,
    };

    setLivres([...livres, nouveauLivre]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un livre</Text>
      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={titre}
        onChangeText={setTitre}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={categorieId}
        onValueChange={(value) => setCategorieId(value)}
        style={styles.picker}
      >
        {CATEGORIES.map((categorie) => (
          <Picker.Item
            key={categorie.id}
            label={categorie.genre}
            value={categorie.id}
          />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={ajouterLivre}>
        <Text style={styles.buttonText}>Ajouter un livre</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f5a442",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CreerLivreScreen;
