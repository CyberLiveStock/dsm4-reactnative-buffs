import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Stack.Screen 
        options={{ 
          title: "HOME",
          // headerBackTitle: "Voltar", // iOS
        }} 
      />
      <Text>Hello World</Text>
    </View>
  );
}