class MediaPlayer {
    
    media: HTMLMediaElement;
    plugins: any[];
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayer();

        this.initPlugins();
    }

    private initPlayer () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
        });
    }

    // Play/Pause
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay(el) {
        if (this.media.paused) {
            el.innerText = "Pause";
            this.play();
        } else {
            el.innerText = "Play";
            this.pause();
        }
    }
    
    // Mute/Unmute
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute(el: any) {
        if (this.media.muted) {
            el.innerText = "Mute";
            this.media.muted = false;
        } else {
            el.innerText = "Unmute";
            this.media.muted = true;
        }
    }
}




export default MediaPlayer;