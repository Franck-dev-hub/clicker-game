export function toggleMusic(isPlaying, bgMusic) {
  if (isPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play().catch((e) => console.log("Play error :", e));
    bgMusic.volume = 1;
  }
  return !isPlaying;
}
