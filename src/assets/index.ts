import MediaPlayer from './MediaPlayer';

// plugins
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('button');
const muteBtn: HTMLElement = document.getElementById('toggleMute');

const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ]
});

button.onclick = (e) => player.togglePlay(e.path[0]);
muteBtn.onclick = (e) => player.toggleMute(e.path[0]);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log(err.message);
    })
}