new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Blinding Lights",
          artist: "The Weeknd",
          cover: "./images/1.jpg",
          source: "./music/1.mp3",
          url: "https://youtu.be/4NRXx6U8ABQ?si=xNika7d-qeIvUfQZ",
          favorited: false
        },
        {
          name: "Levitating",
          artist: "Dua Lipa",
          cover: "./images/2.jpg",
          source: "./music/2.mp3",
          url: "https://youtu.be/TUVcZfQe-Kw?si=F33SdkhsTTDMC_2W",
          favorited: true
        },
        {
          name: "shape of you",
          artist: "Ed Sheeran",
          cover: "./images/3.jpg",
          source: "./music/3.mp3",
          url: "https://youtu.be/JGwWNGJdvx8?si=2y228JoAMDkNi6WG",
          favorited: false
        },
        {
          name: "sao Paulo",
          artist: "The Weeknd",
          cover: "./images/4.jpg",
          source: "./music/4.mp3",
          url: "https://youtu.be/AQ5NlI-SJR0?si=TwGstE8akdA5OAMm",
          favorited: false
        },
        {
          name: "Despacito",
          artist: "Luis Fonsi ft. Daddy Yankee",
          cover: "./images/5.jpg",
          source: "./music/5.mp3",
          url: "https://youtu.be/kJQP7kiw5Fk?si=YTsmPvCGu0Xdh21R",
          favorited: true
        },
        {
          name: "believer",
          artist: "Imagine Dragons",
          cover: "./images/6.jpg",
          source: "./music/6.mp3",
          url: "https://youtu.be/7wtfhZwyrcc?si=i1EJe49ASIjnjpna",
          favorited: false
        },
        {
          name: "perfect",
          artist: "Ed Sheeran",
          cover: "./images/7.jpg",
          source: "./music/7.mp3",
          url: "https://youtu.be/2Vv-BfVoq4g?si=zTU0c5uhqjTahgGr",
          favorited: true
        },
        {
          name: "Love story",
          artist: "Taylor Swift",
          cover: "./images/8.jpg",
          source: "./music/8.mp3",
          url: "https://youtu.be/8xg3vE8Ie_E?si=buIKl7g5TYCiDGIw",
          favorited: false
        },
        {
          name: "Heat waves",
          artist: "Glass Animals",
          cover: "./images/9.jpg",
          source: "./music/9.mp3",
          url: "https://youtu.be/KT7F15T9VBI?si=13MkctaHRLa0wXxX",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});