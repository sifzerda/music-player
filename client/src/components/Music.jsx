import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaVolumeUp, FaVolumeMute, FaVolumeOff } from 'react-icons/fa'; // Import speaker icons

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Volume range is 0 to 1

  const [duration, setDuration] = useState(0); // Duration of the song
  const [currentTime, setCurrentTime] = useState(0); // Current playback time

  const [showVolumeControl, setShowVolumeControl] = useState(false); // State for volume control visibility

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

  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl);
  };

    // Format time as mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
      };

        // Update duration and current time
  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player) {
        player.addEventListener('loadedmetadata', () => {
          setDuration(player.duration);
        });
        player.addEventListener('timeupdate', () => {
          setCurrentTime(player.currentTime);
        });
      }
    }
  }, [playerRef]);

    // Calculate the progress as a percentage
    const progress = duration ? (currentTime / duration) * 100 : 0;

      // Handle click on progress bar to seek
  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    setCurrentTime(newTime);
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      player.currentTime = newTime;
    }
  };


  return (
    <div className="music-player">
      <div className="title-bar">
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
        <div className="title2">Now Playing:</div>
        <div className="title">{songs[currentSongIndex].title}</div>

        <div className="progress-bar-container" onClick={handleProgressBarClick}>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="progress-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="title2">{formatTime(currentTime)} / {formatTime(duration)}</div>
        <div className="title2"></div>


        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={songs[currentSongIndex].url}
        playing={isPlaying}
        volume={volume}
        controls={false} // Disable built-in controls (custom styled controls)
        onEnded={handleNextSong}
        className="react-player"
      />
 <div className="controls">
        <button className="control-button" onClick={handlePreviousSong}>◁◁</button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? '||' : '▷'}
        </button>
        <button className="control-button" onClick={handleNextSong}>▷▷</button>
        <button className="volume-toggle" onClick={toggleVolumeControl}>
          {volume === 0 ? <FaVolumeMute /> : volume <= 0.5 ? <FaVolumeOff /> : <FaVolumeUp />}
        </button>
        {showVolumeControl && (
          <div className="volume-control">
            <input
              className='volume-slider'
              type="range"
              id="volume"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;