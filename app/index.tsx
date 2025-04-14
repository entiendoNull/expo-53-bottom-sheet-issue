import { ScrollView, StyleSheet, Text } from "react-native";
import { BottomSheet } from "@expo/ui/BottomSheet";
import { Button } from "@expo/ui/Button";
import * as React from "react";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function Index() {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [height, setHeight] = React.useState<number>(100);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={() => setIsOpened((h) => !h)}>Toggle</Button>
      <Text>isOpened: {isOpened ? "yes" : "no"}</Text>
      <BottomSheet isOpened={isOpened} onIsOpenedChange={(e) => setIsOpened(e)}>
        <Animated.View
          layout={LinearTransition.duration(300)}
          style={{ height, padding: 20 }}
        >
          <Button onPress={() => setHeight((h) => (h > 500 ? 100 : h + 100))}>
            Increase height
          </Button>
        </Animated.View>
      </BottomSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
