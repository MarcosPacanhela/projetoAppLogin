import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Style';
import ButtonLogin from '../components/ButtonLogin';
import ButtonEsqueciSenha from '../components/ButtonEsqueciSenha';
import ButtonCadastrar from '../components/ButtonCadastrar';
import { Link } from 'expo-router';

export function ScreenLogin() {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bem-vindo</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
          autoCapitalize='none'
        />
        <ButtonLogin />
        <Link href={"/RegistrationScreen"} asChild>
          <ButtonCadastrar />
        </Link>
        <ButtonEsqueciSenha />
      </View>
    </View>
  );
}
