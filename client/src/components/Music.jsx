import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range is 0 to 1
  const playerRef = useRef(null);

  const songs = [
    { url: '../../public/sounds/thethingintroduces.mp3', title: '01 The Thing Introduces - Jaga Jazzist' },
    { url: '../../public/sounds/onearmedbandit.mp3', title: '02 One Armed Bandit - Jaga Jazzist' },
    { url: '../../public/sounds/banana.mp3', title: '03 Bananfluer Overalt - Jaga Jazzist' },
    { url: '../../public/sounds/spektral.mp3', title: '04 220 V Spektral (Final Mix) - Jaga Jazzist' },
    { url: '../../public/sounds/shrine.mp3', title: '05 The Shrine (OKIOK Remix) - Jaga Jazzist' },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="music-player">
      <div className="title-bar">
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
        <div className="title2">Now Playing:</div>
        <div className="title">{songs[currentSongIndex].title}</div>
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={songs[currentSongIndex].url}
        playing={isPlaying}
        volume={volume}
        controls={false} // Disable built-in controls
        onEnded={handleNextSong}
        className="react-player"
      />
      <div className="controls">
        <button className="control-button" onClick={handlePreviousSong}> ◁◁ </button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? ' ||  ' : '▷'}
        </button>
        <button className="control-button" onClick={handleNextSong}> ▷▷ </button>
      

        <button className="control-button" onClick={handleNextSong}> ▷▷ </button>
        <div className="volume-control">
          <label htmlFor="volume">Volume:</label>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      
      </div>
    </div>
  );
};

export default MusicPlayer;
