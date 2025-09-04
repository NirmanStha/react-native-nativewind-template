import { Tabs } from "expo-router";
import { getRouteTitle } from "../../lib/utils/navigation";
import CustomHeader from "../_components/navigation/CustomHeader";
import "../globals.css";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          header: (props) => (
            <CustomHeader title={getRouteTitle(props.route.name)} />
          ),
        }}
      >
        <Tabs.Screen name="(home)" />
        <Tabs.Screen name="Setting" />
      </Tabs>
    </>
  );
}
