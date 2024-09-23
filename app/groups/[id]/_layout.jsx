import { Slot, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function GroupLayout() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Group Layout {id}</Text>
      <Slot />
    </View>
  );
}
