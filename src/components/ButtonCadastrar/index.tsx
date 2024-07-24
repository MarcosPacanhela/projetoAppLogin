import React, { forwardRef } from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent  } from 'react-native';

import { styles } from './Style';

interface ButtonCadastrarProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonCadastrar = forwardRef<TouchableOpacity, ButtonCadastrarProps>(({ onPress }, ref) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} ref={ref}>
            <Text style={styles.text}>
                Criar uma conta
            </Text>
        </TouchableOpacity>
    </View>
  );
});

export default ButtonCadastrar;