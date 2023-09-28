import copyLink from '@/assets/share/copy-link.svg';
import instagramLogo from '@/assets/icons/instagram-logo.svg';
import kakao from '@/assets/share/kakao.svg';
import gmail from '@/assets/share/gmail.png';
import facebookMessenger from '@/assets/share/facebook_messenger.png';

export const SHARINGS = [
  {
    title: 'Copy Link',
    src: copyLink,
    method: 'copy',
  },
  {
    title: 'Kakao',
    src: kakao,
    method: 'kakao',
  },
  {
    title: 'Instagram',
    src: instagramLogo,
    method: 'instagram',
  },
  {
    title: 'Messenger',
    src: facebookMessenger,
    method: 'facebookMessenger',
  },
  {
    title: 'Gmail',
    src: gmail,
    method: 'gmail',
  },
];
