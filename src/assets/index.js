import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const button = document.querySelector('button');
const unmute = document.getElementById('unmute');

const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay(),
    ]
});

button.onclick = () => player.togglePlay();
unmute.onclick = () => player.unmute();