import React, { useLayoutEffect, useContext } from "react";
import { FlatList } from "react-native";
import GridTile from "../components/GridTile";
import { SongTitleContext } from '../data/SongTitleContext';
import { SongArtistContext } from "../data/SongArtistContext";
import { SongIconContext } from '../data/SongIconContext';
import { SongIdContext } from '../data/SongIdContext';
import { SongListContext } from '../data/SongListContext';

export default ListScreen = ({ navigation }) => {

    // Contexts
    const [clickedSongTitle, setClickedSongTitle] = useContext(SongTitleContext);
    const [clickedSongArtist, setClickedSongArtist] = useContext(SongArtistContext);
    const [clickedSongIcon, setClickedSongIcon] = useContext(SongIconContext);
    const [clickedSongId, setClickedSongId] = useContext(SongIdContext);
    const [songListData, setSongListData] = useContext(SongListContext);

    const songs = songListData.songs;

    // const clickHandler = (id) => {
    //     navigation.navigate("Detail", { itemId: id });
    // };

    return (
        <FlatList
            data={songs}
            renderItem={(itemData) => {
                return (
                    <GridTile
                        source={itemData.item.icon}
                        titleText={itemData.item.title}
                        artistText={itemData.item.artist}
                        onClick={() => {
                            setClickedSongId(itemData.item.id);
                            setClickedSongIcon(itemData.item.icon);
                            setClickedSongTitle(itemData.item.title);
                            setClickedSongArtist(itemData.item.artist);
                            navigation.navigate("Detail");
                        }}
                        id={itemData.item.id}
                    />
                );
            }}
        />
    );
}

// import React, { useLayoutEffect, useContext } from "react";
// import { FlatList } from "react-native";
// // import GridTile from "../components/GridTile";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default ListScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text>ListScreen</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });