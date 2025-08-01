import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RelatorioScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');

  const enviarRelatorio = () => {
    Alert.alert('Relatório enviado!', `Nome: ${nome}\nEmail: ${email}\nDescrição: ${descricao}`);
    setNome('');
    setEmail('');
    setDescricao('');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Incidente</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Descreva o incidente"
        placeholderTextColor="#aaa"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={enviarRelatorio}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RelatorioScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#000', 
  },
  title: { 
    fontSize: 24,   
    marginTop: 40, 
    marginBottom: 20, 
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#1c1c1c',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#666',
  },
  sendButton: {
    backgroundColor: '#4B4FBF',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16 
  },
});