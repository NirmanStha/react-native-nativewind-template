import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "../globals.css";
const AvatarMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ToggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View className="container max-w-20">
      <TouchableOpacity
        onPress={ToggleMenuOpen}
        className="bg-blue-500 p-2 rounded-full"
      >
        <Text className="text-black">AvatarMenu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AvatarMenu;
