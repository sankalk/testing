var audio = document.getElementById("autoplay loop");

// Check if there's a playback state stored in local storage
var playbackState = localStorage.getItem("audioPlaybackState");

// If there's a playback state, resume playback
if (playbackState === "playing") {
    audio.play();
}
