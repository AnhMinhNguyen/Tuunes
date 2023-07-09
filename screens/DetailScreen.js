// import React, { useContext } from 'react';
// import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

// import { SongListContext } from '../data/SongListContext';
// import Song from '../models/song';

// export default DetailScreen = ({ route, navigation }) => {
//     const [songListData, setSongListData] = useContext(SongListContext);
//     const { title } = route.params;
// }

import React, { useRef, useState, useEffect, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { SongTitleContext } from '../data/SongTitleContext';
import { SongIconContext } from '../data/SongIconContext';
import { SongIdContext } from '../data/SongIdContext';
import { SongListContext } from '../data/SongListContext';
import { SafeAreaView } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
// import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from "react-native-track-player";

import { SONGS } from "../data/dummy-data";

export default DetailScreen = ({ navigation }) => {

    // Contexts
    const [clickedSongTitle, setClickedSongTitle] = useContext(SongTitleContext);
    const [clickedSongIcon, setClickedSongIcon] = useContext(SongIconContext);
    const [clickedSongId, setClickedSongId] = useContext(SongIdContext);
    const [songListData, setSongListData] = useContext(SongListContext);

    const songTitle = clickedSongTitle;

    // const setupPlayer = async () => {
    //     await TrackPlayer.setupPlayer();

    //     await TrackPlayer.add(SONGS);
    // }

    // const togglePlayback = async (playBackState) => {
    //     const currentTrack = await TrackPlayer.getCurrentTrack();

    //     if (currentTrack != null) {
    //         if (playBackState == State.Paused) {
    //             await TrackPlayer.play();
    //         } else {
    //             await TrackPlayer.pause();
    //         }
    //     }
    // }

    // useEffect(() => {
    //     setupPlayer();
    // }, []);

    // const playBackState = usePlaybackState();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.maincontainer}>
                {/* Ringtone content */}
                <View>
                    <Text style={styles.ringtonesTitle}>Title</Text>
                    <Text style={styles.ringtonesArtist}>Artist</Text>
                </View>
                {/* Artwork */}
                <View style={styles.imageWrapper}>
                    <Image style={styles.ringtonesImage}
                        source={require('../assets/ringtones_icons/306191216_486187240182509_4368508577780012850_n.png')}
                    >
                    </Image>
                </View>

                {/* Music controls */}
                <View style={styles.rintonesControlContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="share-outline" size={30} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="heart-outline" size={30} color={'white'} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => togglePlayback(playBackState)}>
                        <Ionicons name={playBackState === State.Playing ? "pause-circle" : "play-circle"} size={75} color={'white'} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="play-circle" size={75} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="download-outline" size={30} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="ellipsis-vertical-outline" size={30} color={'white'} />
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    maincontainer: {
        flex: 1,
        marginTop: 10,
    },
    imageWrapper: {
        width: 300,
        height: 300,
        marginTop: 30,
    },
    ringtonesImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    ringtonesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    ringtonesArtist: {
        fontSize: 16,
        color: 'white'
    },
    rintonesControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    }
});