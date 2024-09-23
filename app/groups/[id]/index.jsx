import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const GroupIndexScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Group Index {id}</Text>
      <Text style={{fontWeight: '700'}}>The two values above should be the same.</Text>

      <Link
        href={{
          pathname: `/groups/[id]`,
          params: { id: (parseInt(id) + 1).toString() },
        }}
        style={{
          color: 'blue',
        }}
        push
      >
        Click to increment group
      </Link>
    </View>
  );
};

export default GroupIndexScreen;
