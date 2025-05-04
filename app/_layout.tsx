import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Configurações globais do Stack Navigator */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#3498db" },
          headerTitleStyle: { color: "white" },
          headerBackVisible: false, // Removendo a setinha de voltar
        }}
      >
        {/* Telas herdarão essas opções */}
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "Home", 
            headerShown: false, // Oculta o cabeçalho apenas na tela inicial
          }} 
        />
        <Stack.Screen name="profile" options={{ title: "Perfil" }} />
      </Stack>
    </View>
  );
}