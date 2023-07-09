import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default GridTile = props => {
  return (
    <View style={styles.columnWrapper}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.onClick(props.id)}
      >
        <Image
          style={styles.iconStyle}
          source={props.source}
        />
        <View style={styles.itemWrapper}>
          <Text style={styles.gridTextTitle}>{props.titleText}</Text>
          <Text style={styles.gridTextArtist}>{props.artistText}</Text>
        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
    marginHorizontal: 10,
    padding: 15,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    borderRadius: 10,
  },
  itemWrapper:{
    flex: 1,
    // flexDirection: 'row',
  },
  gridTextTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  gridTextArtist:{
    fontSize: 16,
    color: 'white',
  },
  columnWrapper: {
    flex: 1,
  },
  iconStyle: {
    flex: 0.3,
    height: '100%',
    borderRadius: 15,
  }
});
