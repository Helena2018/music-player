const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let isPlaying = false;

const songs = [
  {
    name: 'taylor-1',
    displayName: 'Blank Space',
    artist: 'Taylor Swift',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  }
]

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.getAttribute('title', 'Pause')
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.getAttribute('title', 'Play')
  music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Updated DOM 
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
}

//On Load - Select Second song
loadSong(songs[1]);