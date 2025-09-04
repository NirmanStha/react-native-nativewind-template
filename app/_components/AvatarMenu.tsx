import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import "../globals.css";

const AvatarMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ToggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View className="flex items-center justify-center h-full">
      <TouchableOpacity
        onPress={ToggleMenuOpen}
        className="bg-blue-500 p-2 rounded-full"
      >
        <AntDesign name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarMenu;
