function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        }
    }
    this.plugins.forEach((plugin) => {
        plugin.run(player);
    })
}

// Play/Pause
MediaPlayer.prototype.play = function () {
    this.media.play();
}
MediaPlayer.prototype.pause = function () {
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function (el) {
    if (this.media.paused) {
        el.innerText = "Pause";
        this.play();
    } else {
        el.innerText = "Play";
        this.pause();
    }
}

// Mute/Unmute
MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}
MediaPlayer.prototype.toggleMute = function (el) {
    if (this.media.muted) {
        el.innerText = "Mute";
        this.media.muted = false;
    } else {
        el.innerText = "Unmute";
        this.media.muted = true;
    }
}

export default MediaPlayer;