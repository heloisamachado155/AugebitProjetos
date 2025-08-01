import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { useFonts } from 'expo-font'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function LoginScreen({ navigation }) { 
  const [email, setEmail] = useState('');
  const [fontsLoaded] = useFonts({ 
    
  }); 


  const validEmail = 'admin@empresa.com';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu email.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, digite um email válido.');
      return;
    }

    if (email === validEmail) {
      
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Email não encontrado. Verifique suas credenciais.');
    }
  };
 
  if (!fontsLoaded) return null; 
 
  return ( 
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}> 
        <View style={styles.titleRow}> 
          <Text style={styles.title}>Faça seu login</Text> 

          <Image source={require('../assets/logo.png')} style={styles.logo} /> 
        </View> 
        <Text style={styles.subtitle}> 
          Para facilitar o acesso use o{'\n'}email da empresa 
        </Text> 
      </View> 
 
      <View style={styles.card}> 
        <Text style={styles.label}>E-mail, telefone ou usuário</Text> 
        <TextInput 
          style={styles.input} 
          placeholder="" 
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        /> 
 
        <TouchableOpacity style={styles.button} onPress={handleContinue}> 
          <Text style={styles.buttonText}>Continuar</Text> 
        </TouchableOpacity> 
 
        <TouchableOpacity> 
          <Text style={styles.linkText}>Criar conta</Text> 
        </TouchableOpacity> 
 
        <View style={styles.dividerContainer}> 
          <View style={styles.divider} /> 
          <View style={styles.divider} /> 
        </View> 
 
        <TouchableOpacity style={styles.googleButton}> 
          <AntDesign name="google" size={20} color="#000" /> 
          <Text style={styles.googleText}>Fazer login com o Google</Text> 
        </TouchableOpacity>
      </View> 
    </SafeAreaView> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    
    flex: 1, 
    backgroundColor: '#fff', 
  }, 
  header: { 
    marginTop: 60, 
    paddingHorizontal: 24, 
  }, 
  titleRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
  }, 
  title: { 
    fontSize: 34, 
    fontFamily: 'Poppins-Bold', 
    color: '#000', 
    marginRight: 8, 
  }, 
  logo: { 
    width: 48, 
    height: 48, 
    resizeMode: 'contain', 
  }, 
  subtitle: { 
    marginTop: 8, 
    fontSize: 24, 
    fontFamily: 'Poppins-Regular', 
    color: '#333', 
  }, 
  card: { 
    backgroundColor: '#2D2D2D', 
    borderRadius: 6, 
    marginTop: 40, 
    padding: 24, 
    marginHorizontal: 16, 
  }, 
  label: { 
    color: '#FFF', 
    fontFamily: 'Poppins-Regular', 
    fontSize: 12, 
    marginBottom: 8, 
  }, 
  input: { 
    backgroundColor: '#FFF', 
    borderRadius: 4, 
    height: 44, 
    paddingHorizontal: 12, 
    marginBottom: 16, 
  }, 
  button: { 
    backgroundColor: '#4B4FBF', 
    borderRadius: 6, 
    height: 44, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12, 
  }, 
  buttonText: { 
    color: '#FFF', 
    fontFamily: 'Poppins-Bold', 
    fontSize: 14, 
  }, 
  linkText: { 
    color: '#FFF', 
    fontFamily: 'Poppins-Regular', 
    fontSize: 12, 
    textAlign: 'center', 
    marginBottom: 16, 
  }, 
  dividerContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 16, 
  }, 
  divider: { 
    height: 1, 
    backgroundColor: '#999', 
    flex: 1, 
    marginHorizontal: 8, 
  }, 
  googleButton: { 
    backgroundColor: '#E0E0E0', 
    borderRadius: 6, 
    height: 44, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 16, 
  }, 
  googleText: { 
    fontFamily: 'Poppins-Regular', 
    fontSize: 14, 
    color: '#000', 
    marginLeft: 8, 
  }, 
});