import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ScreenLogin"  />
      <Stack.Screen name="RegistrationScreen" options={{title: "Cadastro"}}/>
    </Stack>
  );
}
