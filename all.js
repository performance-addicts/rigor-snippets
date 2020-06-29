// disable all videos

const videos = document.getElementsByTagName("video");

if (videos) {
  for (let i = 0; i < videos.length; i++) {
    videos[i].removeAttribute("autoplay");
    videos[i].removeAttribute("loop");
  }
}
for (let i = 0; i < videos.length; i++) {
  videos[i].removeAttribute("autoplay");
  videos[i].removeAttribute("loop");
}

videos.forEach((video) => {
  video.removeAttribute("autoplay");
  video.removeAttribute("loop");
});

// dismiss bounce x

if (document.querySelector('[id^="bx-creative-"]')) {
  document.querySelector('[id^="bx-close-inside-"]').click();
}
