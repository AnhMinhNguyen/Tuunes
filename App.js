import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import MainNavigator from "./navigation/MainNavigator";
import { SongListContext } from "./data/SongListContext";
import { SongTitleContext } from './data/SongTitleContext';
import { SongIconContext } from './data/SongIconContext';
import { SongIdContext } from './data/SongIdContext';
import { SONGS, IDCOUNTERSONGS } from "./data/dummy-data";

export default (App) => {
  const [songListData, setSongListData] = useState({
    songs: SONGS,
    idCounterSongs: IDCOUNTERSONGS
  });
  const [clickedSongTitle, setClickedSongTitle] = useState('');
  const [clickedSongIcon, setClickedSongIcon] = useState();
  const [clickedSongId, setClickedSongId] = useState();

  return (
    <SongListContext.Provider value={[songListData, setSongListData]}>
      <SongTitleContext.Provider value={[clickedSongTitle, setClickedSongTitle]}>
        <SongIconContext.Provider value={[clickedSongIcon, setClickedSongIcon]}>
          <SongIconContext.Provider value={[clickedSongId, setClickedSongId]}>
            <MainNavigator />
          </SongIconContext.Provider>
        </SongIconContext.Provider>
      </SongTitleContext.Provider>
      <StatusBar style="auto" />
    </SongListContext.Provider>
  );
};
