import React, { useRef, useState, useEffect, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { SongTitleContext } from '../data/SongTitleContext';
import { SongArtistContext } from "../data/SongArtistContext";
import { SongIconContext } from '../data/SongIconContext';
import { SongIdContext } from '../data/SongIdContext';
import { SongListContext } from '../data/SongListContext';
import { SafeAreaView } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from "react-native-track-player";

import { SONGS } from "../data/dummy-data";

export default DetailScreen = ({ navigation }) => {

	// Contexts
	const [clickedSongTitle, setClickedSongTitle] = useContext(SongTitleContext);
	const [clickedSongArtist, setClickedSongArtist] = useContext(SongArtistContext);
	const [clickedSongIcon, setClickedSongIcon] = useContext(SongIconContext);
	const [clickedSongId, setClickedSongId] = useContext(SongIdContext);
	const [songListData, setSongListData] = useContext(SongListContext);

	const setUpPlayer = async () => {
		try {
			await TrackPlayer.setupPlayer();
			await TrackPlayer.add(SONGS);
		} catch (error) {
			console.log(error);
		}
	}

	const togglePlayback = async (playBackState) => {
		const currentTrack = await TrackPlayer.getCurrentTrack();

		if (currentTrack != null) {
			if (playBackState == State.Paused) {
				await TrackPlayer.play();
			} else {
				await TrackPlayer.pause();
			}
		}
	}

	useEffect(() => {
		setUpPlayer();
	});

	const playBackState = usePlaybackState();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontainer}>
				{/* Ringtone content */}
				<View>
					<Text style={styles.ringtonesTitle}>{clickedSongTitle}</Text>
					<Text style={styles.ringtonesArtist}>{clickedSongArtist}</Text>
				</View>
				{/* Artwork */}
				<View style={styles.imageWrapper}>
					<Image style={styles.ringtonesImage}
						source={clickedSongIcon}
					>
					</Image>
				</View>

				{/* Music controls */}
				<View style={styles.rintonesControlContainer}>
					<TouchableOpacity onPress={() => { }}>
						<Ionicons name="share-outline" size={30} color={'white'} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => togglePlayback(playBackState)}>
						<Ionicons name="heart-outline" size={30} color={'white'} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => togglePlayback(playBackState)}>
						<Ionicons name={playBackState === State.Playing ? "pause-circle" : "play-circle"} size={75} color={'white'} />
					</TouchableOpacity>
					{/* <TouchableOpacity onPress={() => { }}>
                <Ionicons name="play-circle" size={75} color={'white'} />
              </TouchableOpacity> */}
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
		fontSize: 20,
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