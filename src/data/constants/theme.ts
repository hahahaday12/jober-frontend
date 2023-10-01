import modernBg from '@/assets/theme/modern-bg.png';
import simpleBg from '@/assets/theme/simple-bg.png';
import classicBg from '@/assets/theme/classic-bg.png';
import darkBg from '@/assets/theme/dark-bg.png';
import blueBg from '@/assets/theme/blue-bg.png';
import modern from '@/assets/theme/modern.png';
import simple from '@/assets/theme/simple.png';
import classic from '@/assets/theme/classic.png';
import dark from '@/assets/theme/dark.png';
import blue from '@/assets/theme/blue.png';

export const THEMES = [
  {
    label: 'modern',
    src: modern,
    bg: modernBg,
    blockBorderRadius: 0,
    blockStyleClassName: 'flat',
  },
  {
    label: 'simple',
    src: simple,
    bg: simpleBg,
    className: '',
  },
  {
    label: 'classic',
    src: classic,
    bg: classicBg,
  },
  {
    label: 'dark',
    src: dark,
    bg: darkBg,
  },
  {
    label: 'blue',
    src: blue,
    bg: blueBg,
  },
];
