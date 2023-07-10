import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import MainNavigator from "./navigation/MainNavigator";
import { SongListContext } from "./data/SongListContext";
import { SongTitleContext } from './data/SongTitleContext';
import { SongArtistContext } from "./data/SongArtistContext";
import { SongIconContext } from './data/SongIconContext';
import { SongIdContext } from './data/SongIdContext';
import { SONGS } from "./data/dummy-data";

export default (App) => {
  const [songListData, setSongListData] = useState({
    songs: SONGS
  });
  const [clickedSongTitle, setClickedSongTitle] = useState('');
  const [clickedSongArtist, setClickedSongArtist] = useState('');
  const [clickedSongIcon, setClickedSongIcon] = useState();
  const [clickedSongId, setClickedSongId] = useState();

  return (
    <SongListContext.Provider value={[songListData, setSongListData]}>
      <SongTitleContext.Provider value={[clickedSongTitle, setClickedSongTitle]}>
        <SongArtistContext.Provider value={[clickedSongArtist, setClickedSongArtist]}>
          <SongIconContext.Provider value={[clickedSongIcon, setClickedSongIcon]}>
            <SongIdContext.Provider value={[clickedSongId, setClickedSongId]}>
              <MainNavigator />
            </SongIdContext.Provider>
          </SongIconContext.Provider>
        </SongArtistContext.Provider>
      </SongTitleContext.Provider>
      <StatusBar style="auto" />
    </SongListContext.Provider>
  );
};
