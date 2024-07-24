import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './Style';

export default function ButtonLogin() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.text}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  );
}