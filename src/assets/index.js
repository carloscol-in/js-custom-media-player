import MediaPlayer from './MediaPlayer.js';

// plugins
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const button = document.querySelector('button');
const unmute = document.getElementById('toggleMute');

const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ]
});

button.onclick = (e) => player.togglePlay(e.path[0]);
unmute.onclick = (e) => player.toggleMute(e.path[0]);