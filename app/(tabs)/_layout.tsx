import { Tabs } from "expo-router";
import AvatarMenu from "../components/AvatarMenu";
import "../globals.css";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        headerRight: () => <AvatarMenu />,
      }}
    >
      <Tabs.Screen name="(home)" options={{ title: "Home" }} />
      <Tabs.Screen name="Setting" options={{ title: "Movie" }} />
    </Tabs>
  );
}
