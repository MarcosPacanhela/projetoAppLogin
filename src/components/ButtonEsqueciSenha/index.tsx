import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './Style';

export default function ButtonEsqueciSenha() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.text}>
                Esqueci minha senha
            </Text>
        </TouchableOpacity>
    </View>
  );
}