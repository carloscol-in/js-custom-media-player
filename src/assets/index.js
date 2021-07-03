const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer() {}

MediaPlayer.prototype.play = function(config) {
    this.media = config.el;
}

const player = new MediaPlayer({
    el: video,
});

button.onclick = () => {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}