export function skyColor(o2) {
  const hue = Math.max(120, 240 - o2 * 0.2);
  const saturation = Math.min(80, o2 * 0.1);
  const lightness = Math.min(50, o2 * 0.05);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
