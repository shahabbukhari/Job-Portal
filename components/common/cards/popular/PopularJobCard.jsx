import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default PopularJobCard;
