import { useContext, useState, useEffect } from 'react';
import './ContentPlay.scss';
import { Songs } from '../../../Context';
function ContentPlay() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);

    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };
    const handlePlayAllSong = () => {
        handleSetSong(DataSongs[0]);
    };
    useEffect(() => {
        setIdSong(song.id);
    }, [song]);
    return (
        <div className="ContentPlay">
            <div className="ContentSpacing">
                <h5>PLAYLIST</h5>
                <h1>Today's Top Hits</h1>
                <p>Rema & Selena Gomez are on top of the Hottest 50!</p>
            </div>
            <div className="action-bar">
                <div className="play-list-song-btn" onClick={handlePlayAllSong}>
                    <svg role="img" height="28" width="28" viewBox="0 0 24 24" class="Svg-ytk21e-0 jAKAlG">
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                </div>
                <div className="tym-list-song-btn">
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-ytk21e-0 jAKAlG">
                        <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
                    </svg>
                </div>
                <div className="more-list-song-btn">
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-ytk21e-0 jAKAlG">
                        <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                </div>
            </div>
            <div className="PlayListSong">
                <table class="table table-borderless ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">
                                <i class="fa-solid fa-download"></i>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {DataSongs.map((song, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={`${idSong === song.id ? 'active' : ''}`}
                                    onClick={() => handlePlaySong(song.id)}
                                >
                                    <th scope="row">{index + 1}</th>
                                    <td>{song.name}</td>
                                    <td>{song.author}</td>
                                    <td>
                                        <a href={song.url}>
                                            <i class="fa-solid fa-download"></i>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContentPlay;
