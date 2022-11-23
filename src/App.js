import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import PlayList from './component/PlayList';
import React, { useState } from 'react';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './component/Playing';

function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };

    return (
        <React.Fragment>
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <div className="App">
                    <div className="col-2">
                        <Nav />
                    </div>

                    <div className="col-10">
                        <PlayList />
                    </div>
                </div>
                <Playing />
            </Songs.Provider>
        </React.Fragment>
    );
}

export default App;
