// accent colors for the example cards, copied from app/theme/colors.js
export const BRAND = '#394EFF'; // teal
export const TEAL = '#3EAAAF'; // tealx
export const AMBER = '#F5A623'; // yellow2
export const ORANGE = '#E28940'; // orange
export const GREEN = '#42AE5E'; // green
export const RED = '#CC0000'; // red

// translucent background for badges, readable on both light and dark surfaces
export function tint(color: string, alpha = 0.12) {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
