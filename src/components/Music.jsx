import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaVolumeUp, FaVolumeMute, FaVolumeOff } from 'react-icons/fa';

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const playerRef = useRef(null);

  const songs = [
    { url: 'sounds/alcoholic.mp3', title: '01 The Alcoholic - Röyksopp' },
    { url: 'sounds/spektral.mp3', title: '02 220 V Spektral (Final Mix) - Jaga Jazzist' },
    { url: 'sounds/shrine.mp3', title: '03 The Shrine (OKIOK Remix) - Jaga Jazzist' },
    { url: 'sounds/aumetra.mp3', title: '04 Aumetra the Witch - cYsmix' },
    { url: 'sounds/ouroboros.mp3', title: '05 Ouroboros - Beats Antique' },
    { url: 'sounds/aurevoir.mp3', title: '06 Aurevoir - Pyramid' },
    { url: 'sounds/father.mp3', title: '07 Father - Pyramid' },
    { url: 'sounds/panthertrek.mp3', title: '08 Panther Trek - Vessels' },
    { url: 'sounds/bhangrasaanj.mp3', title: '09 Bhangra Saanj - Beats Antique' },
    { url: 'sounds/占い師ft.mp3', title: '10 占い師 Fortune Teller - cYsmix' },
    { url: 'sounds/topaz.mp3', title: '11 Topaz - Bazz' },
    { url: 'sounds/sunofagun.mp3', title: '12 Sun of a Gun - Bazz' },
    { url: 'sounds/dzjin.mp3', title: '13 Dzjin - cYsmix' },
    { url: 'sounds/starfire.mp3', title: '14 Starfire - Jaga Jazzist' },
    { url: 'sounds/oban.mp3', title: '14 Oban - Jaga Jazzist' },
    { url: 'sounds/apex.mp3', title: '14 Apex - Jaga Jazzist' },
  ];

  // event listeners ---------------------------------------//

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

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

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleProgressBarChange = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      player.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleProgressBarChange(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleProgressBarChange(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="music-player">
      <div className="title-bar">
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
        <div className="title2">Now Playing:</div>
        <div className="title">{songs[currentSongIndex].title}</div>
        
        <div 
          className="progress-bar-container" 
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
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
        controls={false}
        onEnded={handleNextSong}
        className="react-player"
      />
      <div className="controls">
        <button className="control-button" onClick={handlePreviousSong}>◁◁</button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? 'II' : '▷'}
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