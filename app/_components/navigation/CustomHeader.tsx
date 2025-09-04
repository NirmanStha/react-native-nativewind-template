import React from "react";
import { Text, View } from "react-native";
import AvatarMenu from "../AvatarMenu";

interface CustomHeaderProps {
  title: string;
}

/**
 * Custom header component for the app's navigation
 * Displays a title on the left and avatar menu on the right
 */
const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  return (
    <View
      className="flex flex-row justify-between items-center  px-4"
      style={{ height: 60 }}
    >
      <Text className="text-white font-bold">{title}</Text>
      <AvatarMenu />
    </View>
  );
};

export default CustomHeader;
