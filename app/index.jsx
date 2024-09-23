import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const RootIndexScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      

      <Link
        href={{
          pathname: `/groups/[id]`,
          params: { id: 1 },
        }}
        push
      >
        Click to view group path
      </Link>
    </View>
  );
};

export default RootIndexScreen;
