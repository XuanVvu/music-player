import { useContext, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playing.scss';
import { Songs } from '../../Context';
function Playing() {
    const { song, handleSetSong, DataSongs } = useContext(Songs);
    const handleClickNext = () => {
        handleSetSong(song.id + 1);
        if (song.id > DataSongs.length + 1) {
            handleSetSong(DataSongs[0].id);
        }
    };
    const handleClickPre = () => {
        handleSetSong(song.id - 1);
    };

    return (
        <div className="playing-container">
            <AudioPlayer
                className="player-music"
                autoPlay
                src={song.url}
                onEnded={handleClickNext}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
            />
        </div>
    );
}

export default Playing;
